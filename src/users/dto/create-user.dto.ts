import {
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsString,
    Length,
    Max,
    Min,
  } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    password: Number;
}
