// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { GoogleStrategy } from './google.strategy';
import { GoogleService } from './google.service';
import { GoogleController } from './google.controller';


@Module({
  providers: [GoogleService, GoogleStrategy],
  controllers: [GoogleController],
})
export class GoogleModule {}
