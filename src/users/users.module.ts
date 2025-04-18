import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import jwtConfig from 'src/config/jwt.config';
import profileConfig from './config/profileConfig.config';
import { CreateUserProvider } from './providers/create-user.provider';
import { CreateManyUsersService } from './providers/createManyUsers.service';
import { FindOneUserByEmailProvider } from './providers/find-one-user-by-email.provider';
import { UsersService } from './providers/users.service';
import { User } from './user.entity';
import { UsersController } from './users.controller';
@Module({
  providers: [
    UsersService,
    CreateManyUsersService,
    CreateUserProvider,
    FindOneUserByEmailProvider,
  ],
  controllers: [UsersController],
  exports: [UsersService],
  imports: [
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([User]),
    ConfigModule.forFeature(profileConfig),
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync(jwtConfig.asProvider()),
  ],
})
export class UsersModule {}
