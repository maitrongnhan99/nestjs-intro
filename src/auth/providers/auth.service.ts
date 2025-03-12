import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  public login(email: string, password: string): string {
    return `token-${email}-${password}`;
  }

  public isAuth() {
    return true;
  }
}
