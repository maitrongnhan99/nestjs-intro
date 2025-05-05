import {
  Inject,
  Injectable,
  UnauthorizedException,
  forwardRef,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import jwtConfig from 'src/config/jwt.config';
import { UsersService } from 'src/users/providers/users.service';
import { SignInDto } from '../dtos/signin';
import { GenerateTokenProvider } from './generate-token.provider';
import { HashingProvider } from './hashing.provider';

@Injectable()
export class SignInProvider {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,

    @Inject(forwardRef(() => HashingProvider))
    private readonly hashingProvider: HashingProvider,

    @Inject()
    private readonly jwtService: JwtService,

    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,

    @Inject()
    private readonly generateTokenProvider: GenerateTokenProvider,
  ) {}

  public async signIn(signInDto: SignInDto) {
    const user = await this.usersService.findOneByEmail(signInDto.email);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await this.hashingProvider.comparePassword(
      signInDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const { accessToken, refreshToken } =
      await this.generateTokenProvider.generateToken(user);

    return {
      accessToken,
      refreshToken,
    };
  }
}
