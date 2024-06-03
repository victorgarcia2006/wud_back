import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RazasService {
  constructor(private prisma: PrismaService) {}

  async findAllBreads() {
    const razas = (await this.prisma.razas.findMany({
      orderBy: {
        nombreRaza: 'asc',
      }
    }));
    return razas;
  }
}
