// resolvers/index.ts
import { heltResolver } from './helt.resolver';

export const resolvers = {
  Query: {
    ...heltResolver.Query,
  },
  Mutation: {
    ...heltResolver.Mutation,
  },
};

