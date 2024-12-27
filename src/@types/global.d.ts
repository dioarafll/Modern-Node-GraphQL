
// src/@types/global.d.ts

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      PORT?: string;
      JWT_SECRET: string;
      DB_URL: string;
      // Tambahkan variabel lingkungan lainnya sesuai kebutuhan
    }
  }
}
