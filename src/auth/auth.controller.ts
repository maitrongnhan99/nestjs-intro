import {
  Body,
  Controller,
  forwardRef,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from 'src/users/providers/users.service';
import { Auth } from './decorators/auth.decorator';
import { RefreshTokenDto } from './dtos/refresh-token.dto';
import { SignInDto } from './dtos/signin';
import { AuthType } from './enums/auth-type.enum';
import { AuthService } from './providers/auth.service';
import { RefreshTokenProvider } from './providers/refresh-token.provider';
import { GoogleAuthenticationService } from './social/providers/google-authentication.service';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
    private readonly refreshTokenProvider: RefreshTokenProvider,
    private readonly googleAuthenticationService: GoogleAuthenticationService,
  ) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.usersService.findOneByEmail(body.email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(body.email, body.password);
  }

  @Post('sign-in')
  @HttpCode(HttpStatus.OK)
  @Auth(AuthType.None)
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @Post('refresh-token')
  @HttpCode(HttpStatus.OK)
  @Auth(AuthType.None)
  refreshToken(@Body() refreshTokenDto: RefreshTokenDto) {
    return this.refreshTokenProvider.refreshToken(refreshTokenDto);
  }
}
