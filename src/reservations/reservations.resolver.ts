import {
  Query,
  Resolver,
  Mutation,
  Args,
  Context,
  Info,
} from '@nestjs/graphql';
import { GraphQLResolveInfo, GraphQLSchema } from 'graphql';

import { User, Reservation, ReservationCreateInput } from '../graphql.schema';
import { ReservationService } from './reservations.service';

@Resolver('Reservation')
export class ReservationsResolver {
  constructor(private readonly reservationService: ReservationService) {}

  @Query('reservations')
  async getReservationsByUser(
    @Context() user: User,
    @Info() info: GraphQLResolveInfo): Promise<Reservation[]> {
    return await this.reservationService.getReservationsByUser(user, info);
  }

  @Query('reservation')
  async getReservationByUser(
    @Args() id: string,
    @Info() info: GraphQLResolveInfo): Promise<Reservation> {
    return await this.reservationService.getReservation(id, info);
  }

  @Mutation('createReservation')
  async createReservation(
    @Args() data: ReservationCreateInput,
    @Context() user: User,
    @Info() info: GraphQLResolveInfo): Promise<Reservation> {
    return await this.reservationService.createReservation(data, info);
  }
}
