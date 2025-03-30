import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { MetaOptionsModule } from 'src/meta-options/meta-options.module';
import { PostsModule } from 'src/posts/posts.module';
import { TagsModule } from 'src/tags/tags.module';
import { UsersModule } from 'src/users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [
    UsersModule,
    PostsModule,
    AuthModule,
    TagsModule,
    MetaOptionsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'maitrongnhan99',
        database: 'nestjs-blog',
        // entities: [User, Post, Tag, MetaOption],
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [],
      imports: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
