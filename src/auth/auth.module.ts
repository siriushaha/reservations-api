import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [AuthResolver, AuthService],
  imports: [PrismaModule],
})
export class AuthModule {}
