

// src/types/cart.types.ts

/**
 * CartAttributes
 * Mewakili semua atribut yang terdapat pada model Cart,
 * termasuk atribut yang otomatis disediakan oleh database.
 */
export interface CartAttributes {
  id: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * CartCreationAttributes
 * Mewakili atribut yang diperlukan saat membuat data baru pada model Cart.
 * Dalam hal ini, hanya 'userId' yang wajib diberikan oleh pengguna.
 */
export interface CartCreationAttributes {
  userId: number;
}

/**
 * CartUpdateAttributes
 * Mewakili atribut yang bisa diperbarui pada model Cart.
 * Semua properti bersifat opsional, karena tidak semua atribut akan diperbarui.
 */
export interface CartUpdateAttributes {
  userId?: number;
}

/**
 * CartResponse
 * Tipe untuk respons API yang mengembalikan data Cart tunggal.
 */
export interface CartResponse {
  success: boolean;
  message: string;
  data?: CartAttributes | null;
}

/**
 * CartsResponse
 * Tipe untuk respons API yang mengembalikan daftar Cart.
 */
export interface CartsResponse {
  success: boolean;
  message: string;
  data: CartAttributes[];
}

/**
 * CartDeleteResponse
 * Tipe untuk respons API saat menghapus data Cart.
 */
export interface CartDeleteResponse {
  success: boolean;
  message: string;
}
