import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UserService} from './users.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [UsersResolver, UserService],
  imports: [PrismaModule],
})
export class UsersModule {}
