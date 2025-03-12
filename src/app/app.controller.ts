import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
@ApiTags('App')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('welcome')
  getWelcome(): string {
    return this.appService.getWelcome();
  }

  @Get('about')
  getAbout(): string {
    return this.appService.getAbout();
  }
}
