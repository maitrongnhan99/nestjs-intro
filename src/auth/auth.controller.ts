import {
  Body,
  Controller,
  forwardRef,
  Inject,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from 'src/users/providers/users.service';
import { AuthService } from './providers/auth.service';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  login(@Body() body: { email: string; password: string }) {
    const user = this.usersService.findOneByEmail(body.email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(body.email, body.password);
  }
}
