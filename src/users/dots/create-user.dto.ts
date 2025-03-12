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
  @IsString()
  @IsNotEmpty()
  @MinLength(3, {
    message: 'First name must be at least 3 characters long',
  })
  @MaxLength(20, {
    message: 'First name must be less than 20 characters long',
  })
  firstName: string;

  @IsString()
  @IsOptional()
  @MinLength(3, {
    message: 'Last name must be at least 3 characters long',
  })
  @MaxLength(20, {
    message: 'Last name must be less than 20 characters long',
  })
  lastName?: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
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
  password: string;
}
