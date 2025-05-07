import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GoogleUser } from '../interfaces/google-user.interface';
import { User } from '../user.entity';

@Injectable()
export class CreateGoogleUserProvider {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  public async createGoogleUser(googleUser: GoogleUser) {
    try {
      const user = this.usersRepository.create(googleUser);
      return this.usersRepository.save(user);
    } catch (error) {
      throw new InternalServerErrorException('Failed to create user', {
        cause: error,
        description: 'Failed to create user',
      });
    }
  }
}
