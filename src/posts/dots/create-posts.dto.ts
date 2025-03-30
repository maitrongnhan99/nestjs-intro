import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreatePostsMetaOptionsDto } from '../../meta-options/dtos/create-posts-meta-options.dto';
import { PostStatus, PostType } from '../types';
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
  @IsDateString()
  @IsNotEmpty()
  publishOn: Date;

  @ApiProperty({
    description: 'Ids of the tags of the post',
    example: [1, 2],
    required: false,
  })
  @IsArray()
  @IsOptional()
  @IsNumber({}, { each: true })
  tags?: number[];

  @ApiProperty({
    type: 'object',
    description: 'The meta options of the post',
    example: { metaValue: '{"key": "value", "number": 123, "boolean": true}' },
    properties: {
      metaValue: {
        type: 'json',
        description: 'The value of the meta option in JSON format',
        example: '{"key": "value", "number": 123, "boolean": true}',
      },
    },
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreatePostsMetaOptionsDto)
  metaOptions?: CreatePostsMetaOptionsDto;

  @ApiProperty({
    description: 'The author id of the post',
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  authorId: number;
}
