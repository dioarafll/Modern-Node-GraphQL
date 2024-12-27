
// src/middlewares/loggerMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import { logger } from '../config/logger';

/**
 * Middleware untuk mencatat setiap request yang masuk
 * @param req Request object
 * @param res Response object
 * @param next NextFunction
 */
export const loggerMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  logger.info(`Incoming request: ${req.method} ${req.url}`);
  next();
};
