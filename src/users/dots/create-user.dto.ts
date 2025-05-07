import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'The first name of the user',
    example: 'John',
    minLength: 3,
    maxLength: 20,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3, {
    message: 'First name must be at least 3 characters long',
  })
  @MaxLength(20, {
    message: 'First name must be less than 20 characters long',
  })
  firstName: string;

  @ApiProperty({
    description: 'The last name of the user',
    example: 'Doe',
    minLength: 3,
    maxLength: 20,
    required: false,
  })
  @IsString()
  @IsOptional()
  @MinLength(3, {
    message: 'Last name must be at least 3 characters long',
  })
  @MaxLength(20, {
    message: 'Last name must be less than 20 characters long',
  })
  lastName?: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'john.doe@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'Password1!',
    minLength: 8,
    maxLength: 20,
  })
  @IsString()
  @IsOptional()
  @MinLength(8, {
    message: 'Password must be at least 8 characters long',
  })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
    },
  )
  @MaxLength(20, {
    message: 'Password must be less than 20 characters long',
  })
  password?: string;

  @ApiProperty({
    description: 'The Google ID of the user',
    example: '1234567890',
    required: false,
  })
  @IsString()
  @IsOptional()
  googleId?: string;
}
