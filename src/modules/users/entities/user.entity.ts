import { Role } from "src/utils/role.enum";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn({ type: "int" })
    id: number;

    @Column({ type: "varchar", length: 50, nullable: true })
    name: string;

    @Column({ type: "varchar", length: 30, nullable: true })
    phone: string;

    @Column({ type: "varchar", length: 50, nullable: false, unique: true })
    email: string;

    @Column({ type: "text", nullable: false })
    password: string;

    @Column({ type: "varchar", length: 10, nullable: false })
    role: Role;

    @Column({ type: "boolean", default: true })
    isActive: boolean;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    updatedAt: Date;
}
