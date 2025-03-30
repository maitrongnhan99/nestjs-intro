import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
} from 'class-validator';

export class CreateTagDto {
  @ApiProperty({
    description: 'The name of the tag',
    example: 'Tag 1',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The slug of the tag',
    example: 'tag-1',
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: 'Slug must contain only lowercase letters, numbers and hyphens',
  })
  @MaxLength(255)
  slug: string;

  @ApiProperty({
    description: 'The description of the tag',
    example: 'This is a description of the tag',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'The schema of the tag',
    example: 'This is a schema of the tag',
  })
  @IsString()
  @IsOptional()
  schema?: string;

  @ApiProperty({
    description: 'The featured image URL of the tag',
    example: 'https://example.com/image.jpg',
  })
  @IsString()
  @IsOptional()
  @MaxLength(255)
  @IsUrl()
  featuredImageUrl?: string;
}
