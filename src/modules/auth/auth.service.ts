import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(createAuthDto: CreateAuthDto): Promise<User | null> {
    const user = await this.usersService.findByEmail(createAuthDto.email);
    if (user && user.password === createAuthDto.password) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { 
      sub: user.id,
      email: user.email,
      role: user.role,
     };
    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
      token: this.jwtService.sign(payload),
    };
  }
}
