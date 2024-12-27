
// src/@types/jwt.d.ts

export interface CustomJwtPayload {
  userId: string; // Contoh informasi pengguna dalam token
  role: string; // Misalnya 'admin' atau 'user'
  iat?: number;
  exp?: number;
}
