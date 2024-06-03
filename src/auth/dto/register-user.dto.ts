import { IsString, IsEmail } from "class-validator";

export class RegisterUserDto {
    @IsString()
    nombre: string;

    @IsString()
    pApellido: string;

    @IsString()
    sApellido: string;
    
    @IsEmail()
    email: string;
    
    @IsString()
    password: string;
}