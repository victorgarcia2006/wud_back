import { IsString, IsNumber, IsEmail } from 'class-validator';

export class RegisterPetDto {
  @IsString()
  id: string;

  @IsNumber()
  peso: number;

  @IsString()
  raza: string;

  @IsNumber()
  edad: number;

  @IsString()
  nombre: string;

  @IsEmail()
  emailDueno: string;
}
