import {
  BadRequestException,
  Injectable,
  NotFoundException,
  RequestTimeoutException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationProvider } from 'src/common/pagination/providers/pagination.provider';
import { TagsService } from 'src/tags/providers';
import { Tag } from 'src/tags/tag.entity';
import { UsersService } from 'src/users/providers/users.service';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../dots/create-posts.dto';
import { GetPostsDto } from '../dots/get-posts.dto';
import { UpdatePostDto } from '../dots/patch.dto';
import { Post } from '../post.entity';
/**
 * Service responsible for handling post-related operations
 * such as retrieving, creating, and managing posts.
 */
@Injectable()
export class PostsService {
  /**
   * Inject the UsersService into the PostsService
   */
  constructor(
    private readonly usersService: UsersService,
    private readonly tagsService: TagsService,
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,

    private readonly paginationProvider: PaginationProvider,
  ) {}

  /**
   * Retrieves all posts for a specific user
   */
  public findAll() {
    return this.postsRepository.find();
  }

  public findByAuthorId(userId: number, getPostsDto: GetPostsDto) {
    return this.paginationProvider.paginateQuery(
      getPostsDto,
      this.postsRepository,
    );
  }

  /**
   * Creates a new post
   */
  public async create(createPostDto: CreatePostDto) {
    const author = await this.usersService.findOneById(createPostDto.authorId);
    if (!author) {
      throw new Error('Author not found');
    }
    const tags = await this.tagsService.findAllByIds(createPostDto.tags ?? []);
    const post = this.postsRepository.create({
      ...createPostDto,
      author,
      tags,
    });
    return await this.postsRepository.save(post);
  }

  public async delete(id: number) {
    try {
      await this.postsRepository.delete(id);
      return {
        deleted: true,
        id,
      };
    } catch {
      throw new Error('Failed to delete post');
    }
  }

  public async findOneById(id: number) {
    return await this.postsRepository.findOne({
      where: { id },
      // relations: ['tags'],
    });
  }

  public async update(id: number, updatePostDto: UpdatePostDto) {
    let post: Post | null;
    try {
      post = await this.findOneById(id);
    } catch {
      throw new RequestTimeoutException(
        'Database connection timeout, please try again later',
      );
    }

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    let tags: Tag[] = [];
    try {
      tags = await this.tagsService.findAllByIds(updatePostDto.tags ?? []);
    } catch {
      throw new RequestTimeoutException(
        'Database connection timeout, please try again later',
      );
    }

    if (!tags || tags?.length !== (updatePostDto.tags?.length ?? 0)) {
      throw new BadRequestException(
        'Please check your tag ids and make sure they are valid',
      );
    }

    post.title = updatePostDto.title ?? post.title;
    post.slug = updatePostDto.slug ?? post.slug;
    post.content = updatePostDto.content ?? post.content;
    post.status = updatePostDto.status ?? post.status;
    post.publishOn = updatePostDto.publishOn ?? post.publishOn;
    post.featuredImageUrl =
      updatePostDto.featuredImageUrl ?? post.featuredImageUrl;
    post.schema = updatePostDto.schema ?? post.schema;
    post.tags = updatePostDto.tags ? tags : post.tags;

    let updatedPost: Post;
    try {
      updatedPost = await this.postsRepository.save(post);
    } catch {
      throw new RequestTimeoutException(
        'Database connection timeout, please try again later',
      );
    }

    return updatedPost;
  }
}
