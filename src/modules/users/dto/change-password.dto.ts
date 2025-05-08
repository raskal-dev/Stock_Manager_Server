import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class ChangePasswordDto {
    @ApiProperty({ example: 'oldpassword123', description: 'Ancien mot de passe' })
    @IsNotEmpty({ message: 'Veuillez fournir un ancien mot de passe' })
    @IsString()
    oldPassword: string;

    @ApiProperty({ example: 'newpassword123', description: 'Nouveau mot de passe' })
    @IsNotEmpty({ message: 'Veuillez fournir un nouveau mot de passe' })
    @IsString()
    @MinLength(6)
    newPassword: string;
}