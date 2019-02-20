import {
  Query,
  Resolver,
  Subscription,
  Mutation,
  Args,
  Info,
} from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '../graphql.schema';
import { UserService } from './users.service';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly userService: UserService) {}

  @Query('users')
  async getUsers(@Args() args, @Info() info): Promise<User[]> {
    return await this.userService.getUsers(args, info);
  }
}
