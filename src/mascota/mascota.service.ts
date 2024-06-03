import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MascotaService {

  constructor(private prisma: PrismaService){}

  async findOnePet(id: string) {
    const mascota = await this.prisma.mascota.findUnique({
      select: {
        id: true,
        peso: true,
        edad: true,
        idRaza: {
          select: {
            nombreRaza: true,
          }
        },
        nombre: true,
        emailDueno: true,
      },
      where: {
        id: id
      }
    });
    return mascota;
  }
}
