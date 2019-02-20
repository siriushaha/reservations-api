import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GraphQLResolveInfo, GraphQLSchema } from 'graphql';
import { Hotel, HotelCreateInput, HotelUpdateInput, Status } from '../graphql.schema';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HotelService {
  constructor(private readonly prismaService: PrismaService) {
  }

  async getHotels(info: GraphQLResolveInfo): Promise<Hotel[]> {
    return await this.prismaService.query.hotels({}, info);
  }

  async getActiveHotels(info: GraphQLResolveInfo): Promise<Hotel[]> {
    return await this.prismaService.query.hotels({ where: { status: Status.ACTIVE}}, info);
  }

  async createHotel(data: HotelCreateInput, info: GraphQLResolveInfo): Promise<Hotel> {
    return await this.prismaService.mutation.createHotel({ data }, info);
  }

  async updateHotel(id: string, data: HotelUpdateInput, info: GraphQLResolveInfo): Promise<Hotel> {
    return await this.prismaService.mutation.updateHotel({ data, where: { id }}, info);
  }

  async updateHotelStatus(id: string, status: Status, info: GraphQLResolveInfo): Promise<Hotel> {
    return await this.prismaService.mutation.updateHotel({ data: { status}, where: { id }}, info);
  }
}
