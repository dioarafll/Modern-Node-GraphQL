
// src/context.ts
import { verifyToken } from '../utils/jwt.util';
import { logger } from '../config/logger';
import { Request } from 'express';

interface Context {
  user?: object | null;
}

export const createContext = ({ req }: { req: Request }): Context => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.split(' ')[1];

  if (!token) {
    logger.warn('No token provided in authorization header');
    return { user: null };
  }

  const decodedUser = verifyToken(token);

  if (!decodedUser) {
    logger.error('Invalid token provided');
    return { user: null }; // Mengembalikan null jika verifikasi gagal
  }

  logger.info('User authenticated successfully');
  return { user: decodedUser }; // Pastikan user adalah object
};
