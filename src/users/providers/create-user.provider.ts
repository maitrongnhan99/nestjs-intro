import {
  ConflictException,
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HashingProvider } from 'src/auth/providers/hashing.provider';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dots/create-user.dto';
import { User } from '../user.entity';
@Injectable()
export class CreateUserProvider {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,

    @Inject(forwardRef(() => HashingProvider))
    private readonly hashingProvider: HashingProvider,
  ) {}

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

  public async createUser(createUserDto: CreateUserDto): Promise<User> {
    // check if the user already exists
    const userExists = await this.checkUserExists(createUserDto.email);
    if (userExists) {
      throw new ConflictException('User already exists');
    }

    try {
      const hashedPassword = await this.hashingProvider.hashPassword(
        createUserDto.password,
      );

      const newUser = this.usersRepository.create({
        ...createUserDto,
        password: hashedPassword,
      });
      return this.usersRepository.save(newUser);
    } catch {
      throw new RequestTimeoutException('Database connection failed', {
        description: 'Request timeout when connecting to the database',
      });
    }
  }
}
