import { Module } from '@nestjs/common';
import { ReservationsResolver } from './reservations.resolver';
import { ReservationService} from './reservations.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [ReservationsResolver, ReservationService],
  imports: [PrismaModule],
})
export class ReservationsModule {}
