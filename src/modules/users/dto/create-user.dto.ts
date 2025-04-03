import { Role } from "src/utils/Role.enum";
import { IsEmail, IsEnum, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsEnum(Role)
    @IsNotEmpty({ message: 'Role is required' })
    role: Role;

    @IsEmail({}, { message: 'Email is not valid' })
    @IsNotEmpty({ message: 'Email is required' })
    email: string;

    @IsNotEmpty({ message: 'Password is required' })
    @MinLength(6, { message: 'Password is too short. Minimum length is 6 characters' })
    password: string;
}
