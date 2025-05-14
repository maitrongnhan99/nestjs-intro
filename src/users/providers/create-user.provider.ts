import {
  ConflictException,
  forwardRef,
  Inject,
  Injectable,
  InternalServerErrorException,
  RequestTimeoutException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HashingProvider } from 'src/auth/providers/hashing.provider';
import { MailService } from 'src/mail/providers/mail.service';
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

    private readonly mailService: MailService,
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

    const hashedPassword = await this.hashingProvider.hashPassword(
      createUserDto.password || '',
    );

    const newUser = this.usersRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });
    const user = await this.usersRepository.save(newUser);

    try {
      console.log('send mail', this.mailService);
      await this.mailService.sendMail(user);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    return user;

    // try {
    //   const hashedPassword = await this.hashingProvider.hashPassword(
    //     createUserDto.password || '',
    //   );

    //   const newUser = this.usersRepository.create({
    //     ...createUserDto,
    //     password: hashedPassword,
    //   });
    //   const user = await this.usersRepository.save(newUser);

    //   await this.mailService.sendMail(user);

    //   return user;
    // } catch {
    //   throw new RequestTimeoutException('Database connection failed', {
    //     description: 'Request timeout when connecting to the database',
    //   });
    // }
  }
}
