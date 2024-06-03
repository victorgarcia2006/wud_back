import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from "./dto/register-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { RegisterPetDto } from "./dto/register-pet.dto";
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async registerUser(userObject: RegisterUserDto){
    try {
      await this.prisma.usuario.create({
        data: {
          nombre: userObject.nombre,
          pApellido: userObject.pApellido,
          sApellido: userObject.sApellido,
          email: userObject.email,
          password: userObject.password
        }
      });
      return {message: "true"};
    } catch (error) {
      return {message: "false"};
    }
  }

  async login(userObjectLogin: LoginUserDto){
    try {
      const user = await this.prisma.usuario.findUnique({
        where: {
          email: userObjectLogin.email
        }
      });
      if(user.password === userObjectLogin.password){
        return {message: "true"};
      }else{
        return {message: "false"};
      }
    } catch (error) {
      return {message: "false"};
    }
  }

  async registerPet(petObject: RegisterPetDto){
    petObject.id = Math.random().toString(36).substring(7);
    petObject.peso = Number(petObject.peso)
    petObject.edad = Number(petObject.edad)
    try {
      await this.prisma.mascota.create({
        data: {
          id: petObject.id,
          peso: petObject.peso,
          raza: petObject.raza,
          edad: petObject.edad,
          nombre: petObject.nombre,
          emailDueno: petObject.emailDueno
        }
      })
      return {message: "true"};
    } catch (error) {
      return {message: "false"};
    }
  }
}
