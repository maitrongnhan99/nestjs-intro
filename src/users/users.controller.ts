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
  UseGuards,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AccessTokenGuard } from 'src/auth/guards/access-token/access-token.guard';
import { AuthService } from 'src/auth/providers/auth.service';
import { CreateManyUserDto } from './dots/create-many-user.dto';
import { CreateUserDto } from './dots/create-user.dto';
import { GetUserParamDto } from './dots/get-user-param.dto';
import { UpdateUserDto } from './dots/update-user.dto';
import { UsersService } from './providers/users.service';
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

  @UseGuards(AccessTokenGuard)
  @Post('/create')
  public createUser(@Body() createUserDto: CreateUserDto) {
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
  public async getUser(@Param() params: GetUserParamDto): Promise<User | null> {
    return await this.usersService.findOneById(Number(params?.id));
  }

  @Post('/create-many')
  @ApiOperation({
    summary: 'Create many users',
    description: 'Create many users with an array of users',
  })
  @ApiResponse({
    status: 201,
    description: 'The users have been successfully created.',
  })
  @ApiBody({ type: [CreateUserDto] })
  public async createManyUsers(
    @Body() data: CreateManyUserDto,
  ): Promise<{ data: User[] }> {
    return this.usersService.createManyUsers(data);
  }
}
