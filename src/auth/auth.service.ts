import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { GraphQLResolveInfo, GraphQLSchema } from 'graphql';

import { PrismaService } from '../prisma/prisma.service';
import { Status, User, UserCreateInput } from '../graphql.schema';
import { Auth } from './auth.schema';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async getCurrentUser(email: string, info: GraphQLResolveInfo): Promise<User> {
    return await this.prismaService.query.user({ where: { email}}, info);
  }

  async login(email: string, password: string, info: GraphQLResolveInfo): Promise<Auth> {
    const user: User = await this.prismaService.query.user({ where: { email } }, info);
    if (!user || !(await this.comparePassword(password, user.password))) {
      throw new HttpException(
        'Invalid username/password',
        HttpStatus.BAD_REQUEST,
      );
    }
    return {
      token: await jwt.sign({
        id: user.id,
        role: user.role,
      },
      process.env.SECRET,
      { expiresIn: '7d' },
    )};
  }

  async register(name: string, email: string, password: string, info: GraphQLResolveInfo): Promise<User> {
    let user: User = await this.prismaService.query.user({ where: { email } }, info);
    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    const hashedPassword = await this.hashPassword(password);
    const data: UserCreateInput = {
      name,
      email,
      password: hashedPassword,
      status: Status.ACTIVE,
    };
    user = await this.prismaService.mutation.createUser({ data }, info);
    return user;
  }

  private async comparePassword(attempt: string, password): Promise<boolean> {
    return await bcrypt.compare(attempt, password);
  }

  private async hashPassword(password) {
    return await bcrypt.hash(password, 12);
  }
}
