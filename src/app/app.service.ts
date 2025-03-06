import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getWelcome(): string {
    return 'Welcome to my first NestJS API';
  }

  getAbout(): string {
    return 'This is a simple API built with NestJS';
  }
}
