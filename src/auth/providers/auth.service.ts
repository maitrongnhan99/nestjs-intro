import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { SignInDto } from '../dtos/signin';
import { HashingProvider } from './hashing.provider';
import { SignInProvider } from './sign-in.provider';
@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,

    @Inject(forwardRef(() => HashingProvider))
    private readonly hashingProvider: HashingProvider,

    @Inject()
    private readonly signInProvider: SignInProvider,
  ) {}

  public login(email: string, password: string): string {
    return `token-${email}-${password}`;
  }

  public isAuth() {
    return true;
  }

  public async signIn(signInDto: SignInDto) {
    return await this.signInProvider.signIn(signInDto);
  }
}
