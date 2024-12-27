
// src/middlewares/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt.util';
import { JwtPayload } from 'jsonwebtoken';

/**
 * Tipe kustom untuk Request agar mengenali properti 'user'
 */
interface AuthenticatedRequest extends Request {
  user?: JwtPayload | null; // Menambahkan properti 'user' dengan tipe yang sesuai
}

/**
 * Middleware untuk autentikasi berbasis token JWT
 * @param req - Objek permintaan HTTP
 * @param res - Objek respons HTTP
 * @param next - Fungsi untuk melanjutkan ke middleware berikutnya
 */
export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.split(' ')[1]; // Mendapatkan token dari header Authorization

  if (!token) {
    res.status(401).json({ message: 'Unauthorized: No token provided' });
    return; // Pastikan keluar dari fungsi
  }

  try {
    const decoded = verifyToken(token); // Memverifikasi token

    if (!decoded) {
      res.status(401).json({ message: 'Unauthorized: Invalid token' });
      return; // Pastikan keluar dari fungsi
    }

    req.user = decoded; // Menyimpan informasi pengguna ke req.user
    next(); // Melanjutkan ke middleware berikutnya
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
