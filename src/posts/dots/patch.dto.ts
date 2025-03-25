import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreatePostDto } from './create-posts.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @ApiProperty({
    description: 'The id of the post',
    example: '1',
  })
  @IsString()
  @IsNotEmpty()
  id: string;
}
