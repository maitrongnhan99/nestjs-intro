import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

/**
 * The main controller for the application
 */
@Controller()
@ApiTags('App')
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Get the welcome message
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * Get the welcome message
   */
  @Get('welcome')
  getWelcome(): string {
    return this.appService.getWelcome();
  }

  /**
   * Get the about message
   */
  @Get('about')
  getAbout(): string {
    return this.appService.getAbout();
  }
}
