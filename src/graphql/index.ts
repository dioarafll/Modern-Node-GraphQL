
// src/apolloServer.ts
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './schema';
import { createContext } from './context'; // Mengimpor createContext
import { logger } from '../config/logger';

/**
 * Fungsi untuk membuat dan mengkonfigurasi Apollo Server
 * @returns {ApolloServer} - Server Apollo yang siap digunakan
 */
export const createApolloServer = async (): Promise<ApolloServer> => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: createContext, // Menggunakan context untuk autentikasi
    formatError: (err) => {
      logger.error(`GraphQL Error: ${err.message}`, {
        locations: err.locations,
        path: err.path,
      });
      return {
        message: 'Internal server error', // Menyembunyikan detail error di produksi
        code: err.extensions?.code,
      };
    },
    introspection: process.env.NODE_ENV !== 'production', // Nonaktifkan introspection di produksi
    // playground: process.env.NODE_ENV !== 'production', // Nonaktifkan playground di produksi
  });

  await apolloServer.start();
  return apolloServer;
};

// Fungsi untuk mengatur server dan middleware
export const setupApolloMiddleware = (app: express.Application, apolloServer: ApolloServer) => {
  if (process.env.NODE_ENV !== 'production') {
    app.use('/graphql', apolloServer.getMiddleware({ path: '/' }));
    app.use('/playground', express.static('public'));
  } else {
    app.use('/graphql', apolloServer.getMiddleware({ path: '/' }));
  }
};
