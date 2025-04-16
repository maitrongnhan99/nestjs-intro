import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class CreateManyUserDto {
  @ApiProperty({
    description: 'The users to create',
    type: [CreateUserDto],
    isArray: true,
    example: [
      {
        email: 'test@test.com',
        password: 'password',
        firstName: 'John',
        lastName: 'Doe',
      },
    ],
    items: {
      type: 'User',
    },
  })
  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreateUserDto)
  users: CreateUserDto[];
}
