import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class CreateAuthDto {
    @ApiProperty({ example: 'user@example.com', description: 'Adresse email de l\'utilisateur' })
    @IsEmail({}, { message: 'Veuillez fournir une adresse email valide' })
    @IsNotEmpty({ message: 'Veuillez fournir une adresse email' })
    email: string;

    @ApiProperty({ example: 'password123', description: 'Mot de passe de l\'utilisateur' })
    @IsNotEmpty({ message: 'Veuillez fournir un mot de passe' })
    @Length(6, 20, { message: 'Le mot de passe doit contenir entre 6 et 20 caractères' })
    password: string;
}
