import {
  Inject,
  Injectable,
  NotFoundException,
  RequestTimeoutException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import profileConfig from '../config/profileConfig.config';
import { CreateManyUserDto } from '../dots/create-many-user.dto';
import { CreateUserDto } from '../dots/create-user.dto';
import { GetUserParamDto } from '../dots/get-user-param.dto';
import { UpdateUserDto } from '../dots/update-user.dto';
import { GoogleUser } from '../interfaces/google-user.interface';
import { User } from '../user.entity';
import { CreateGoogleUserProvider } from './create-google-user.provider';
import { CreateUserProvider } from './create-user.provider';
import { CreateManyUsersService } from './createManyUsers.service';
import { FindOneByGoogleIdProvider } from './find-one-by-google-id.provider';
import { FindOneUserByEmailProvider } from './find-one-user-by-email.provider';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,

    @Inject(profileConfig.KEY)
    private readonly profileConfiguration: ConfigType<typeof profileConfig>,

    @Inject()
    private readonly createManyUsersService: CreateManyUsersService,

    @Inject()
    private readonly createUserProvider: CreateUserProvider,

    @Inject()
    private readonly findOneUserByEmailProvider: FindOneUserByEmailProvider,

    @Inject()
    private readonly findOneByGoogleIdProvider: FindOneByGoogleIdProvider,

    @Inject()
    private readonly createGoogleUserProvider: CreateGoogleUserProvider,
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

  /**
   * Creates a new user
   */

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

  public async createUser(createUserDto: CreateUserDto): Promise<User> {
    return await this.createUserProvider.createUser(createUserDto);
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
    return await this.findOneUserByEmailProvider.findOneByEmail(email);
  }

  public async createManyUsers(
    data: CreateManyUserDto,
  ): Promise<{ data: User[] }> {
    return this.createManyUsersService.createManyUsers(data);
  }

  public async findOneByGoogleId(googleId: string): Promise<User | null> {
    return this.findOneByGoogleIdProvider.findOneByGoogleId(googleId);
  }

  public async createGoogleUser(googleUser: GoogleUser): Promise<User> {
    return await this.createGoogleUserProvider.createGoogleUser(googleUser);
  }
}
