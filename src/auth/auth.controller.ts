import { Controller, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { RegisterPetDto } from './dto/register-pet.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  create(@Query() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Post('register')
  createRegister(@Query() registerUserDto: RegisterUserDto) {
    return this.authService.registerUser(registerUserDto);
  }

  @Post('register-pet')
  createRegisterPet(@Query() registerPetDto: RegisterPetDto) {
    return this.authService.registerPet(registerPetDto);
  }
}
