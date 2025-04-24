import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TagsService } from 'src/tags/providers';
import { Tag } from 'src/tags/tag.entity';
import { UsersService } from 'src/users/providers/users.service';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../dots/create-posts.dto';
import { Post } from '../post.entity';
@Injectable()
export class CreatePostService {
  constructor(
    private readonly tagsService: TagsService,
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,

    private readonly usersService: UsersService,
  ) {}

  public async create(createPostDto: CreatePostDto, userId: number) {
    let author: User, tags: Tag[];

    try {
      author = (await this.usersService.findOneById(userId)) as User;
      if (!author) {
        throw new Error('Author not found');
      }
      tags = await this.tagsService.findAllByIds(createPostDto.tags ?? []);
    } catch (error) {
      throw new ConflictException(error);
    }

    if (createPostDto?.tags?.length !== tags?.length) {
      throw new BadRequestException('Tags not found');
    }

    try {
      const post = this.postsRepository.create({
        ...createPostDto,
        author,
        tags,
      });
      return await this.postsRepository.save(post);
    } catch {
      throw new ConflictException({
        description: 'Please check your slug, it must be unique',
      });
    }
  }
}
