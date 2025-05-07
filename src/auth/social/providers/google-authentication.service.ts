import {
  forwardRef,
  Inject,
  Injectable,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { OAuth2Client } from 'google-auth-library';
import { GenerateTokenProvider } from 'src/auth/providers/generate-token.provider';
import { UsersService } from 'src/users/providers/users.service';
import jwtConfig from '../../../config/jwt.config';
import { GoogleTokenDto } from '../dtos/google-token.dto';

@Injectable()
export class GoogleAuthenticationService implements OnModuleInit {
  private oAuth2Client: OAuth2Client;

  constructor(
    @Inject(jwtConfig.KEY)
    private readonly config: ConfigType<typeof jwtConfig>,

    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,

    private readonly generateTokenProvider: GenerateTokenProvider,
  ) {}

  onModuleInit() {
    this.oAuth2Client = new OAuth2Client({
      clientId: this.config.googleClientId,
      clientSecret: this.config.googleClientSecret,
    });
  }

  public async authentication(googleTokenDto: GoogleTokenDto) {
    try {
      const loginTicket = await this.oAuth2Client.verifyIdToken({
        idToken: googleTokenDto.token,
        audience: this.config.googleClientId,
      });

      const googlePayload = loginTicket.getPayload();

      if (!googlePayload) {
        throw new UnauthorizedException('Invalid Google token');
      }

      const user = await this.usersService.findOneByGoogleId(googlePayload.sub);

      if (!user) {
        const newUser = await this.usersService.createGoogleUser({
          googleId: googlePayload.sub,
          email: googlePayload.email || '',
          firstName: googlePayload.given_name || '',
          lastName: googlePayload.family_name || '',
        });

        return await this.generateTokenProvider.generateToken(newUser);
      }

      return await this.generateTokenProvider.generateToken(user);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
