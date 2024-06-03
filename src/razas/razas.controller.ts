import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RazasService } from './razas.service';

@Controller('razas')
export class RazasController {
  constructor(private readonly razasService: RazasService) {}

  @Get()
  findAll() {
    return this.razasService.findAllBreads();
  }

}
