
// src/@types/node.d.ts

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PORT: string;
    JWT_SECRET: string;
    DB_URL: string;
    // Tambahkan variabel lingkungan lain sesuai kebutuhan proyek
  }
}
