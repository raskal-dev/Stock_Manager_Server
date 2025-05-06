import { Role } from "src/utils/role.enum";
export declare class User {
    id: number;
    name: string;
    phone: string;
    email: string;
    password: string;
    role: Role;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
