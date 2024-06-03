import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MascotaService } from './mascota.service';

@Controller('mascota')
export class MascotaController {
  constructor(private readonly mascotaService: MascotaService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mascotaService.findOnePet(id);
  }
}
