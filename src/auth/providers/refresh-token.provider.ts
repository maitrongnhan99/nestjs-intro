import { forwardRef, Inject, UnauthorizedException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import jwtConfig from 'src/config/jwt.config';
import { UsersService } from 'src/users/providers/users.service';
import { RefreshTokenDto } from '../dtos/refresh-token.dto';
import { ActiveUserData } from '../interfaces/active-user-data.interface';
import { GenerateTokenProvider } from './generate-token.provider';
export class RefreshTokenProvider {
  constructor(
    @Inject()
    private readonly jwtService: JwtService,

    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,

    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,

    private readonly generateTokenProvider: GenerateTokenProvider,
  ) {}

  public async refreshToken(refreshTokenDto: RefreshTokenDto) {
    try {
      const { sub } = await this.jwtService.verifyAsync<
        Pick<ActiveUserData, 'sub'>
      >(refreshTokenDto.refreshToken, {
        secret: this.jwtConfiguration.secret,
        audience: this.jwtConfiguration.audience,
        issuer: this.jwtConfiguration.issuer,
      });

      const user = await this.usersService.findOneById(sub);

      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      return await this.generateTokenProvider.generateToken(user);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
