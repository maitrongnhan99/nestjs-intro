import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive, Max, Min } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Max(100)
  @Min(1)
  @Type(() => Number)
  page?: number = 1;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  @Min(1)
  @Max(100)
  limit?: number = 10;
}
