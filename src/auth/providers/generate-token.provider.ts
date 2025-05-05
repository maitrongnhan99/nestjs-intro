import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import jwtConfig from 'src/config/jwt.config';
import { User } from 'src/users/users.type';
import { ActiveUserData } from '../interfaces/active-user-data.interface';
@Injectable()
export class GenerateTokenProvider {
  constructor(
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,

    private readonly jwtService: JwtService,
  ) {}

  public async signToken<T>(userId: number, expiresIn: number, payload?: T) {
    const tokenPayload = {
      sub: userId,
      ...payload,
    };

    return await this.jwtService.signAsync(tokenPayload, {
      secret: this.jwtConfiguration.secret,
      audience: this.jwtConfiguration.audience,
      issuer: this.jwtConfiguration.issuer,
      expiresIn,
    });
  }

  public async generateToken(user: User) {
    const [accessToken, refreshToken] = await Promise.all([
      this.signToken<Partial<ActiveUserData>>(
        user.id,
        this.jwtConfiguration.accessTokenTtl,
        {
          email: user.email,
        },
      ),
      this.signToken(user.id, this.jwtConfiguration.refreshTokenTtl),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}
