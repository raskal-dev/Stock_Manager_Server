import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import { CreateAuthDto } from './dto/create-auth.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(createAuthDto: CreateAuthDto): Promise<User | null>;
    login(user: any): Promise<{
        user: {
            id: any;
            name: any;
            email: any;
            phone: any;
            role: any;
        };
        token: string;
    }>;
}
