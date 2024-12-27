
// src/middlewares/errorHandler.ts
import { Request, Response, NextFunction } from 'express';
import { logger } from '../config/logger';

/**
 * Middleware untuk menangani error yang tidak tertangani
 * @param err Error object
 * @param req Request object
 * @param res Response object
 * @param next NextFunction
 */
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  logger.error(`Error occurred: ${err.message}`);
  res.status(500).json({ message: 'Internal server error' });
};
