import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { HotelsModule } from './hotels/hotels.module';
import { ReservationsModule } from './reservations/reservations.module';
import { join } from "path";

@Module({
  imports: [
    GraphQLModule.forRoot(

      {
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => ({ headers: req.headers }),
      path: '/',
      debug: true,
      playground: true,
      installSubscriptionHandlers: true,
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      },
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.d.ts'),
        outputAs: 'class',
      },
    }),
    PrismaModule,
    UsersModule,
    AuthModule,
    HotelsModule,
    ReservationsModule,
  ],
})
export class AppModule {}
