import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Auth } from '../decorators/auth.decorator';
import { AuthType } from '../enums/auth-type.enum';
import { GoogleTokenDto } from './dtos/google-token.dto';
import { GoogleAuthenticationService } from './providers/google-authentication.service';

@Auth(AuthType.None)
@Controller('auth/google-authentication')
export class GoogleAuthenticationController {
  constructor(
    private readonly googleAuthenticationService: GoogleAuthenticationService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  googleAuthentication(@Body() body: GoogleTokenDto) {
    return this.googleAuthenticationService.authentication(body);
  }
}
