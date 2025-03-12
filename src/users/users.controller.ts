import {
  Body,
  Controller,
  DefaultValuePipe,
  forwardRef,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/auth/providers/auth.service';
import { CreateUserDto } from './dots/create-user.dto';
import { GetUserParamDto } from './dots/get-user-param.dto';
import { UpdateUserDto } from './dots/update-user.dto';
import { UsersService } from './users.service';
import { User } from './users.type';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Get()
  @ApiOperation({
    summary: 'Get all users',
    description: 'Get all users with pagination',
  })
  @ApiResponse({
    status: 200,
    description: 'The users have been successfully retrieved.',
  })
  @ApiQuery({
    name: 'page',
    type: Number,
    required: false,
    description: 'The page number will be default 1',
  })
  @ApiQuery({
    name: 'limit',
    type: Number,
    required: false,
    description: 'The limit number will be default 10',
  })
  public getUsers(
    @Param() getUserParamDto: GetUserParamDto,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ): User[] {
    return this.usersService.findAll(getUserParamDto, page, limit);
  }

  @Post('/create')
  public createUser(@Body() createUserDto: CreateUserDto) {
    const isAuth = this.authService.isAuth();
    if (!isAuth) {
      throw new UnauthorizedException('Unauthorized');
    }
    return this.usersService.createUser(createUserDto);
  }

  @Patch('/:id')
  public updateUser(
    @Param() getUserParamDto: Pick<GetUserParamDto, 'id'>,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateUser(getUserParamDto.id, updateUserDto);
  }

  @Get('/:id')
  public getUser(@Param() params: GetUserParamDto): User | null {
    return this.usersService.findOneById(params?.id);
  }
}
