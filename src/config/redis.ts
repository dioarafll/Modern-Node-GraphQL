
// config/redis.ts
import Redis from 'ioredis';
import { logger } from './logger';
import { config } from 'dotenv';

// Load environment variables
config();

/**
 * Membuat koneksi Redis menggunakan URI untuk kemudahan konfigurasi
 * @returns {Redis | null} - Koneksi Redis atau null jika gagal
 */
export const connectRedis = (): Redis | null => {
  const redisUri = process.env.REDIS_URI;

  if (!redisUri) {
    logger.error('Redis URI is not defined in the environment variables');
    return null;
  }

  try {
    const redisClient = new Redis(redisUri, {
      retryStrategy: (times) => {
        const delay = Math.min(times * 50, 2000);
        logger.warn(`Retrying Redis connection in ${delay}ms...`);
        return delay;
      },
    });

    // Event handling untuk memonitor status koneksi
    redisClient.on('connect', () => logger.info('Redis client connected'));
    redisClient.on('error', (error) =>
      logger.error('Redis connection error:', error instanceof Error ? error.message : 'Unknown error')
    );

    return redisClient;
  } catch (error) {
    logger.error('Failed to initialize Redis client:', error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
};
