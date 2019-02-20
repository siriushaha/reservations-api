import { Module } from '@nestjs/common';
import { HotelsResolver } from './hotels.resolver';
import { HotelService} from './hotels.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [HotelsResolver, HotelService],
  imports: [PrismaModule],
})
export class HotelsModule {}
