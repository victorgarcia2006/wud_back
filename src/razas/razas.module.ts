import { Module } from '@nestjs/common';
import { RazasService } from './razas.service';
import { RazasController } from './razas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [RazasController],
  providers: [RazasService],
  imports: [PrismaModule]
})
export class RazasModule {}
