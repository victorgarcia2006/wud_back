import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RazasModule } from './razas/razas.module';
import { AuthModule } from './auth/auth.module';
import { MascotaModule } from './mascota/mascota.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [RazasModule, AuthModule, MascotaModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
