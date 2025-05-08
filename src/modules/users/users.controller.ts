import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from 'src/utils/role.enum';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { ChangePasswordDto } from './dto/change-password.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/guards/roles.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Public } from '../auth/decorators/public.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Roles(Role.ADMIN)
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Roles(Role.ADMIN)
  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Roles(Role.USER)
  @Patch('me/password')
  updateMyPassword(@CurrentUser('id') id: number, @Body() dto: ChangePasswordDto) {
    return this.usersService.changePassword(id, dto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Get('me')
  async getMe(@CurrentUser('id') user) {
    return user;
  }

  @Roles(Role.ADMIN)
  @Get('test')
  testAdmin() {
    return { ok: true };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('profile-test')
  test(@Req() req) {
    console.log('🎯 test req.user =', req.user);
    return req.user;
  }

  @Roles(Role.ADMIN)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Roles(Role.ADMIN)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Roles(Role.ADMIN)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
