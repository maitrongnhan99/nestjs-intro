import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class GetUserParamDto {
  @ApiPropertyOptional({
    description: 'id of the user',
    type: Number,
    example: 1,
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  id: number;
}
