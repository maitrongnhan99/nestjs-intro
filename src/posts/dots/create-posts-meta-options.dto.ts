import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostsMetaOptionsDto {
  @IsString()
  @IsNotEmpty()
  key: string;

  @IsNotEmpty()
  value: string;
}
