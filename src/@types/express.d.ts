
// src/@types/express.d.ts
import { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload | null; // Tambahkan user yang bisa berupa objek atau null
    }
  }
}
