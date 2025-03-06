import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.type';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public getUsers(): User[] {
    return this.usersService.getUsers();
  }

  @Post('/create')
  public createUser(@Body() body: User): User {
    return this.usersService.createUser(body);
  }

  @Get('/:id')
  public getUser(
    @Param('id', ParseIntPipe) id: number,
    @Query('name') name: string,
    @Query('age', new DefaultValuePipe(25), ParseIntPipe) age: number,
    @Query('email') email: string,
  ): User | null {
    console.log('@get user with id', typeof id);
    console.log('@get user with name', name);
    console.log('@get user with age', age);
    console.log('@get user with email', email);
    return this.usersService.getUser(Number(id));
  }
}
