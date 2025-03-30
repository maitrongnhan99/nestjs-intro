import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreatePostDto } from './create-posts.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @ApiProperty({
    description: 'The id of the post',
    example: '1',
  })
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
