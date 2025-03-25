import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreatePostDto } from '../dots/create-posts.dto';

/**
 * Service responsible for handling post-related operations
 * such as retrieving, creating, and managing posts.
 */
@Injectable()
export class PostsService {
  /**
   * Inject the UsersService into the PostsService
   */
  constructor(private readonly usersService: UsersService) {}

  /**
   * Retrieves all posts for a specific user
   */
  public findAll(userId: string) {
    const user = this.usersService.findOneById(Number(userId));
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return [
      {
        id: '1',
        title: 'First Post',
        content: 'This is the first post content',
        user,
      },
      {
        id: '2',
        title: 'Second Post',
        content: 'This is the second post content',
        user,
      },
      {
        id: '3',
        title: 'Third Post',
        content: 'This is the third post content',
        user,
      },
      {
        id: '4',
        title: 'Fourth Post',
        content: 'This is the fourth post content',
        user,
      },
      {
        id: '5',
        title: 'Fifth Post',
        content: 'This is the fifth post content',
        user,
      },
      {
        id: '6',
        title: 'Sixth Post',
        content: 'This is the sixth post content',
        user,
      },
      {
        id: '7',
        title: 'Seventh Post',
        content: 'This is the seventh post content',
        user,
      },
      {
        id: '8',
        title: 'Eighth Post',
        content: 'This is the eighth post content',
        user,
      },
      {
        id: '9',
        title: 'Ninth Post',
        content: 'This is the ninth post content',
        user,
      },
      {
        id: '10',
        title: 'Tenth Post',
        content: 'This is the tenth post content',
        user,
      },
    ];
  }

  /**
   * Creates a new post
   */
  public create(createPostDto: CreatePostDto) {
    return createPostDto;
  }
}
