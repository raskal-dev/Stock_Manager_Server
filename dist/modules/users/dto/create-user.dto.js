"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const role_enum_1 = require("../../../utils/role.enum");
class CreateUserDto {
    name;
    phone;
    email;
    password;
    role;
    isActive;
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John Doe', description: 'Nom de l\'utilisateur' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Veuillez fournir un nom' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+261 xx xx xxx xx', description: 'Numéro de téléphone de l\'utilisateur' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Veuillez fournir un numéro de téléphone' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user@example.com', description: 'Adresse email de l\'utilisateur' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Veuillez fournir une adresse email valide' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'password123', description: 'Mot de passe de l\'utilisateur' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Veuillez fournir un mot de passe' }),
    (0, class_validator_1.Length)(6, 20, { message: 'Le mot de passe doit contenir entre 6 et 20 caractères' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'admin', description: 'Rôle de l\'utilisateur' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Veuillez fournir un rôle' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Statut du Compte de l\'utilisateur' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Veuillez fournir un statut' }),
    __metadata("design:type", Boolean)
], CreateUserDto.prototype, "isActive", void 0);
//# sourceMappingURL=create-user.dto.js.map