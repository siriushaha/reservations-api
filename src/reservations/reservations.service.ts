import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GraphQLResolveInfo, GraphQLSchema } from 'graphql';
import { User, Reservation, ReservationCreateInput } from '../graphql.schema';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReservationService {
  constructor(private readonly prismaService: PrismaService) {
  }

  async getReservationsByUser(user: User, info: GraphQLResolveInfo): Promise<Reservation[]> {
    const { id: userId} = user;
    return await this.prismaService.query.reservations({ where: { bookedBy: { id: userId }}}, info);
  }

  async getReservation(id: string, info: GraphQLResolveInfo): Promise<Reservation> {
    return await this.prismaService.query.hotel({ where: { id }}, info);
  }

  async createReservation(data: ReservationCreateInput, info: GraphQLResolveInfo): Promise<Reservation> {
    return await this.prismaService.mutation.createReservation({ data }, info);
  }

}
