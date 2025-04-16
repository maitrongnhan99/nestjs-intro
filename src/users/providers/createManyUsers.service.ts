import {
  InternalServerErrorException,
  RequestTimeoutException,
} from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateManyUserDto } from '../dots/create-many-user.dto';
import { User } from '../user.entity';

export class CreateManyUsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,

    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  public async createManyUsers(data: CreateManyUserDto): Promise<{
    data: User[];
  }> {
    const newUsers: User[] = [];
    const queryRunner = this.dataSource.createQueryRunner();
    try {
      await queryRunner.connect();
      await queryRunner.startTransaction();
    } catch (error) {
      throw new RequestTimeoutException('Could not connect to the database', {
        cause: error,
        description: (error as Error).message,
      });
    }

    try {
      for (const user of data?.users || []) {
        const newUser = this.usersRepository.create(user);
        await queryRunner.manager.save(User, newUser);
        newUsers.push(newUser);
      }
      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new InternalServerErrorException(
        'Failed to create users in the database',
        {
          cause: error,
          description: (error as Error).message,
        },
      );
    } finally {
      await queryRunner.release();
    }

    return {
      data: newUsers,
    };
  }
}
