import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UsersService } from '../users/users.service';
export declare class AuthController {
    private readonly authService;
    private readonly usersService;
    constructor(authService: AuthService, usersService: UsersService);
    login(createAuthDto: CreateAuthDto): Promise<{
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
