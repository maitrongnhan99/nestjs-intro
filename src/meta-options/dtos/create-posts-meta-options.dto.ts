import { IsJSON, IsNotEmpty } from 'class-validator';

export class CreatePostsMetaOptionsDto {
  @IsJSON()
  @IsNotEmpty()
  metaValue: string;
}
