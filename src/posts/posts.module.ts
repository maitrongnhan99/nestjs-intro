import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { PostsController } from './posts.controller';
import { PostsService } from './services';

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [UsersModule],
})
export class PostsModule {}
