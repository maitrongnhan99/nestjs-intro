import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import ActiveUser from 'src/auth/decorators/active-user.decorator';
import { CreatePostDto } from './dots/create-posts.dto';
import { GetPostsDto } from './dots/get-posts.dto';
import { UpdatePostDto } from './dots/patch.dto';
import { PostsService } from './services';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('{/:userId}')
  public getPosts(
    @Param('userId', ParseIntPipe) userId: number,
    @Query() getPostsDto: GetPostsDto,
  ) {
    return this.postsService.findByAuthorId(userId, getPostsDto);
  }

  @Get()
  public getAllPosts() {
    return this.postsService.findAll();
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
  public async createPost(
    @Body() createPostDto: CreatePostDto,
    @ActiveUser('sub') userId: number,
  ) {
    return this.postsService.create(createPostDto, userId);
  }

  @Patch()
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
  public updatePost(@Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(updatePostDto.id, updatePostDto);
  }

  @ApiOperation({
    summary: 'Delete a post',
    description: 'Allow user to delete a post with the given id',
  })
  @ApiResponse({
    status: 200,
    description: 'The post has been successfully deleted.',
  })
  @Delete('{/:postId}')
  public deletePost(@Param('postId', ParseIntPipe) postId: number) {
    return this.postsService.delete(postId);
  }
}
