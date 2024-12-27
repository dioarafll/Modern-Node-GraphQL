

// src/@types/index.d.ts

// Mendefinisikan tipe global untuk status order
declare global {
  type OrderStatus = 'pending' | 'completed' | 'cancelled';

  // Tipe respons umum untuk API
  interface ApiResponse<T> {
    success: boolean;
    message: string;
    data?: T;
  }
}

// Mengimpor module agar TypeScript mengenali file ini sebagai deklarasi global
export {};
