import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuarioService {

  constructor(private prisma: PrismaService){}

  async findOneUser(id: string) {
    const user = await this.prisma.usuario.findUnique({
      select: {
        nombre: true,
        pApellido: true,
        sApellido: true,
        email: true,
      },
      where: {
        email: id
      }
    });

    return user;
  }
}
