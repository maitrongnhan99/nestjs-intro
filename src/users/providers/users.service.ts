import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
  RequestTimeoutException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import profileConfig from '../config/profileConfig.config';
import { CreateManyUserDto } from '../dots/create-many-user.dto';
import { CreateUserDto } from '../dots/create-user.dto';
import { GetUserParamDto } from '../dots/get-user-param.dto';
import { UpdateUserDto } from '../dots/update-user.dto';
import { User } from '../user.entity';
import { CreateManyUsersService } from './createManyUsers.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,

    @Inject(profileConfig.KEY)
    private readonly profileConfiguration: ConfigType<typeof profileConfig>,

    @InjectDataSource()
    private readonly dataSource: DataSource,

    @Inject()
    private readonly createManyUsersService: CreateManyUsersService,
  ) {}
  /**
   * Find all users
   */
  public findAll(
    getUserParamDto: GetUserParamDto,
    page: number,
    limit: number,
  ): User[] {
    console.log('@findAll with params', getUserParamDto, page, limit);
    const apiKey = this.profileConfiguration.apiKey;
    console.log('@apiKey', apiKey);
    return [];
  }

  private async checkUserExists(email: string): Promise<boolean> {
    try {
      const user = await this.usersRepository.findOne({
        where: { email },
      });
      return Boolean(user);
    } catch {
      throw new RequestTimeoutException('Database connection failed', {
        description: 'Request timeout when connecting to the database',
      });
    }
  }

  /**
   * Creates a new user
   */
  public async createUser(createUserDto: CreateUserDto): Promise<User> {
    // check if the user already exists
    const userExists = await this.checkUserExists(createUserDto.email);
    if (userExists) {
      throw new ConflictException('User already exists');
    }

    const newUser = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(newUser);
  }

  /**
   * Finds a user by their ID
   *
   * @param id - The ID of the user to find
   * @returns The user if found, null otherwise
   */
  public async findOneById(id: number): Promise<User | null> {
    try {
      const user = await this.usersRepository.findOne({
        where: { id },
      });
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return user;
    } catch {
      throw new RequestTimeoutException('Database connection failed', {
        description: 'Request timeout when connecting to the database',
      });
    }
  }

  /**
   * Updates a user's information
   */
  public async updateUser(
    id: number,
    user: UpdateUserDto,
  ): Promise<User | null> {
    await this.usersRepository.update(id, user);
    return await this.findOneById(id);
  }

  /**
   * Finds a user by their email address
   */
  public async findOneByEmail(email: string): Promise<User | null> {
    return await this.usersRepository.findOne({
      where: { email },
    });
  }

  public async createManyUsers(
    data: CreateManyUserDto,
  ): Promise<{ data: User[] }> {
    return this.createManyUsersService.createManyUsers(data);
  }
}
