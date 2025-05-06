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
exports.CreateAuthDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateAuthDto {
    email;
    password;
}
exports.CreateAuthDto = CreateAuthDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user@example.com', description: 'Adresse email de l\'utilisateur' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Veuillez fournir une adresse email valide' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Veuillez fournir une adresse email' }),
    __metadata("design:type", String)
], CreateAuthDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'password123', description: 'Mot de passe de l\'utilisateur' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Veuillez fournir un mot de passe' }),
    (0, class_validator_1.Length)(6, 20, { message: 'Le mot de passe doit contenir entre 6 et 20 caractères' }),
    __metadata("design:type", String)
], CreateAuthDto.prototype, "password", void 0);
//# sourceMappingURL=create-auth.dto.js.map