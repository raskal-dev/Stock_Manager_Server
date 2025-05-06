import { Role } from "src/utils/role.enum";
export declare class CreateUserDto {
    name: string;
    phone: string;
    email: string;
    password: string;
    role: Role;
    isActive: boolean;
}
