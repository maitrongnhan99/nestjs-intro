import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dots/create-posts.dto';
import { UpdatePostDto } from './dots/patch.dto';
import { PostsService } from './services';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(
    /**
     * Dependency Injection
     * Inject the PostsService into the PostsController
     */
    private readonly postsService: PostsService,
  ) {}

  @Get('{/:userId}')
  public getPosts(@Param('userId') userId: string) {
    return this.postsService.findAll(userId);
  }

  @Post()
  @ApiOperation({
    summary: 'Create a new post',
    description: 'Allow user to create a new post with the given details',
  })
  @ApiBody({ type: CreatePostDto })
  @ApiResponse({
    status: 201,
    description: 'The post has been successfully created.',
    type: CreatePostDto,
  })
  public createPost(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Patch('{/:postId}')
  @ApiOperation({
    summary: 'Update a post',
    description: 'Allow user to update a post with the given details',
  })
  @ApiBody({ type: UpdatePostDto })
  @ApiResponse({
    status: 200,
    description: 'The post has been successfully updated.',
    type: UpdatePostDto,
  })
  public updatePost(
    @Param('postId') postId: string,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    console.log(postId, updatePostDto);
  }
}
