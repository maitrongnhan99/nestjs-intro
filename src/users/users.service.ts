import { ConflictException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dots/create-user.dto';
import { GetUserParamDto } from './dots/get-user-param.dto';
import { UpdateUserDto } from './dots/update-user.dto';
import { User } from './user.entity';
/**
 * A service class that handles the logic for the users
 */
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,

    private readonly configService: ConfigService,
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
    const s3BucketName = this.configService.get<string>('S3_BUCKET_NAME');
    console.log('@s3BucketName', s3BucketName);
    return [];
  }

  /**
   * Creates a new user
   */
  public async createUser(createUserDto: CreateUserDto): Promise<User> {
    // check if the user already exists
    const user = await this.usersRepository.findOne({
      where: { email: createUserDto.email },
    });
    if (user) {
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
    return await this.usersRepository.findOne({
      where: { id },
    });
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
}
