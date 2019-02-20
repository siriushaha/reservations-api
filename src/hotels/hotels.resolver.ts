import {
  Query,
  Resolver,
  Mutation,
  Args,
  Info,
} from '@nestjs/graphql';
import { GraphQLResolveInfo, GraphQLSchema } from 'graphql';

import { Hotel, HotelCreateInput, HotelUpdateInput, Status } from '../graphql.schema';
import { HotelService } from './hotels.service';

@Resolver('Hotel')
export class HotelsResolver {
  constructor(private readonly hotelService: HotelService) {}

  @Query('hotels')
  async getHotels(@Info() info: GraphQLResolveInfo): Promise<Hotel[]> {
    return await this.hotelService.getHotels(info);
  }

  @Query('activeHotels')
  async getActiveHotels(@Info() info: GraphQLResolveInfo): Promise<Hotel[]> {
    return await this.hotelService.getActiveHotels(info);
  }

  @Mutation('createHotel')
  async createHotel(
    @Args() data: HotelCreateInput,
    @Info() info: GraphQLResolveInfo): Promise<Hotel> {
    return await this.hotelService.createHotel(data, info);
  }

  @Mutation('updateHotel')
  async updateHotel(
    @Args() id: string,
    @Args() data: HotelUpdateInput,
    @Info() info: GraphQLResolveInfo): Promise<Hotel> {
    return this.hotelService.updateHotel(id, data, info);
  }

  @Mutation('updateHotelStatus')
  async updateHotelStatus(
    @Args() id: string,
    @Args() status: Status,
    @Info() info: GraphQLResolveInfo): Promise<Hotel> {
    return await this.hotelService.updateHotelStatus(id, status, info);
  }
}
