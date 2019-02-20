import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User} from '../graphql.schema';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUsers(args, info): Promise<User[]> {
    return await this.prismaService.query.users(null, info);
  }

}
