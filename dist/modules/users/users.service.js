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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const has_password_1 = require("../../utils/has-password");
const typeorm_2 = require("@nestjs/typeorm");
let UsersService = class UsersService {
    usersRepository;
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(createUserDto) {
        const user = this.usersRepository.create({
            name: createUserDto.name,
            phone: createUserDto.phone,
            email: createUserDto.email,
            role: createUserDto.role,
            isActive: createUserDto.isActive,
            password: await (0, has_password_1.hasPassword)(createUserDto.password),
        });
        return await this.usersRepository.save(user);
    }
    async findAll() {
        return this.usersRepository.find();
    }
    async findOne(id) {
        return this.usersRepository.findOne({
            where: { id },
        });
    }
    async update(id, updateUserDto) {
        const user = await this.usersRepository.preload({
            id,
            ...updateUserDto,
        });
        if (!user) {
            throw new common_1.NotFoundException(`Utilisateur avec l'id ${id} non trouvé`);
        }
        if (updateUserDto.password) {
            user.password = await (0, has_password_1.hasPassword)(updateUserDto.password);
        }
        return this.usersRepository.save(user);
    }
    async remove(id) {
        await this.usersRepository.delete(id);
    }
    async findByEmail(email) {
        return await this.usersRepository.findOne({ where: { email } });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map