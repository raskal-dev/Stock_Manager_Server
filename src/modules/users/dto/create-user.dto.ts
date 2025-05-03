import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, Length } from "class-validator";
import { Role } from "src/utils/role.enum";

export class CreateUserDto {
    @ApiProperty({ example: 'John Doe', description: 'Nom de l\'utilisateur' })
    @IsNotEmpty({ message: 'Veuillez fournir un nom' })
    name: string;

    @ApiProperty({ example: '+261 xx xx xxx xx', description: 'Numéro de téléphone de l\'utilisateur' })
    @IsNotEmpty({ message: 'Veuillez fournir un numéro de téléphone' })
    phone: string;

    @ApiProperty({ example: 'user@example.com', description: 'Adresse email de l\'utilisateur' })
    @IsEmail({}, { message: 'Veuillez fournir une adresse email valide' })
    email: string;

    @ApiProperty({ example: 'password123', description: 'Mot de passe de l\'utilisateur' })
    @IsNotEmpty({ message: 'Veuillez fournir un mot de passe' })
    @Length(6, 20, { message: 'Le mot de passe doit contenir entre 6 et 20 caractères' })
    password: string;

    @ApiProperty({ example: 'admin', description: 'Rôle de l\'utilisateur' })
    @IsNotEmpty({ message: 'Veuillez fournir un rôle' })
    role: Role;

    @ApiProperty({ example: true, description: 'Statut du Compte de l\'utilisateur' })
    @IsNotEmpty({ message: 'Veuillez fournir un statut' })
    isActive: boolean;
}
