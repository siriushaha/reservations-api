import {
  Query,
  Resolver,
  Mutation,
  Args,
  Context,
  Info,
} from '@nestjs/graphql';
import { GraphQLResolveInfo, GraphQLSchema } from 'graphql';
import { UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { BatchPayload } from '../prisma/prisma.binding';
import { User } from '../graphql.schema';
import { Auth } from './auth.schema';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query('whoami')
  async getCurrentUser(
    @Context('user') user: User,
    @Info() info: GraphQLResolveInfo): Promise<User> {
    const { email } = user;
    return await this.authService.getCurrentUser(email, info);
  }

  @Mutation('login')
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
    @Info() info: GraphQLResolveInfo): Promise<Auth> {
    return await this.authService.login(email, password, info);
  }

  @Mutation('register')
  async register(
    @Args('name') name: string,
    @Args('email') email: string,
    @Args('password') password: string,
    @Info() info: GraphQLResolveInfo): Promise<User> {
    return await this.authService.register(name, email, password, info);
  }
}
