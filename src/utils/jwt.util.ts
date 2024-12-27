
// src/utils/jwt.util.ts
import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';
import { logger } from '../config/logger';

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';
const JWT_EXPIRES_IN = '1h'; // Sesuaikan dengan kebutuhan

/**
 * Generate JWT Token
 * @param payload Data yang akan dimasukkan ke dalam token
 * @returns JWT token string
 */
export const generateToken = (payload: object): string => {
  try {
    const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    } as SignOptions);
    logger.info('JWT token generated successfully');
    return token;
  } catch (error) {
    logger.error('Error generating JWT token:', error instanceof Error ? error.message : 'Unknown error');
    throw new Error('Token generation failed');
  }
};

/**
 * Verify JWT Token
 * @param token JWT token string yang akan diverifikasi
 * @returns Decoded JWT payload atau null jika verifikasi gagal
 */
export const verifyToken = (token: string): JwtPayload | null => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (typeof decoded === 'object' && decoded !== null) {
      logger.info('JWT token verified successfully');
      return decoded as JwtPayload;
    }
    return null;
  } catch (error) {
    logger.error('Error verifying JWT token:', error instanceof Error ? error.message : 'Unknown error');
    return null; // Mengembalikan null jika verifikasi gagal
  }
};
