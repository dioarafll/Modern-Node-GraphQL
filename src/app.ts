// src/app.ts
import express, { Application } from 'express'; // Impor Application dari express
import cors from 'cors';
import { config } from 'dotenv';
import { logger } from './config/logger';
import { createApolloServer, setupApolloMiddleware } from './graphql'; // Import Apollo Server dari graphql/index.ts
import { connectRedis } from './config/redis'; // Mengimpor koneksi Redis
import { connectDB } from './config/database'; // Mengimpor fungsi untuk menguji koneksi database
//import sequelize from './config/database';
//import { syncDatabase } from './models';
import { authMiddleware } from './middlewares/authMiddleware';
import { errorHandler } from './middlewares/errorHandler';
import { loggerMiddleware } from './middlewares/loggerMiddleware';
//import authRoutes from './routes/auth.routes'; // Import auth routes


// Load environment variables
config();

const PORT = process.env.PORT || 3000;

const startServer = async (): Promise<Application> => {
  const app: Application = express(); // Pastikan tipe app adalah Application

  // Setup CORS configuration
  const corsOptions = {
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:3000', // Sesuaikan dengan domain frontend
    optionsSuccessStatus: 200,
  };

  app.use(cors(corsOptions));

  // Middleware autentikasi global
  app.use(authMiddleware);
  app.use(loggerMiddleware);
  app.use(errorHandler);
  
  // Entry point untuk rute autentikasi
  // app.use('/api/auth', authRoutes);
 
  await connectDB();
  await connectRedis();

  //await sequelize.sync();
  //await syncDatabase(); 

  // Inisialisasi Apollo Server
  const apolloServer = await createApolloServer();
  setupApolloMiddleware(app, apolloServer); // Menggunakan fungsi untuk setup middleware Apollo

  return app;
};

export default startServer;
