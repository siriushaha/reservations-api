import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { join } from 'path';

@Injectable()
export class GraphqlOptions implements GqlOptionsFactory {
  createGqlOptions(): GqlModuleOptions {
    return {
      typePaths: ['./**/*.graphql'],
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
    };
  }
}
