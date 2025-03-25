import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { PostStatus, PostType } from '../types';
import { CreatePostsMetaOptionsDto } from './create-posts-meta-options.dto';
export class CreatePostDto {
  @ApiProperty({
    description: 'The title of the post',
    example: 'My first post',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(5, {
    message: 'Title must be at least 3 characters long',
  })
  title: string;

  @ApiProperty({
    description: 'The slug of the post',
    example: 'my-first-post',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(5, {
    message: 'Slug must be at least 5 characters long',
  })
  @Matches(/^[a-z0-9-]+$/, {
    message:
      'Slug must contain only lowercase letters, numbers, and hyphens, without spaces',
  })
  slug: string;

  @ApiProperty({
    description: 'The type of the post',
    example: 'post',
    enum: PostType,
    enumName: 'PostType',
  })
  @IsNotEmpty()
  @IsEnum(PostType, {
    message:
      'Post type must be one of the following: post, page, series, story',
  })
  postType: PostType;

  @ApiProperty({
    description: 'The status of the post',
    example: 'draft',
    enum: PostStatus,
    enumName: 'PostStatus',
  })
  @IsEnum(PostStatus, {
    message:
      'Post status must be one of the following: draft, published, scheduled, review',
  })
  @IsNotEmpty()
  status: PostStatus;

  @ApiProperty({
    description: 'The content of the post',
    example: 'This is the content of the post',
    required: false,
  })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiPropertyOptional({
    description: 'The schema of the post',
    example: 'This is the schema of the post',
    required: false,
  })
  @IsString()
  @IsOptional()
  schema?: string;

  @ApiPropertyOptional({
    description: 'The featured image url of the post',
    example: 'https://example.com/image.jpg',
    required: false,
  })
  @IsString()
  @IsOptional()
  featuredImageUrl?: string;

  @ApiProperty({
    description: 'The publish date of the post',
    example: '2021-01-01',
  })
  @IsDate()
  @IsNotEmpty()
  publishOn: Date;

  @ApiProperty({
    description: 'The tags of the post',
    example: ['tag1', 'tag2'],
    required: false,
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  @MinLength(3, { each: true })
  tags?: string[];

  @ApiProperty({
    type: 'array',
    description: 'The meta options of the post',
    example: [{ key: 'metaKey', value: 'metaValue' }],
    items: {
      type: 'object',
      properties: {
        key: {
          type: 'string',
          description: 'The key of the meta option',
          example: 'metaKey',
        },
        value: {
          type: 'string',
          description: 'The value of the meta option',
          example: 'metaValue',
        },
      },
    },
  })
  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreatePostsMetaOptionsDto)
  metaOptions: CreatePostsMetaOptionsDto[];
}
