

// src/types/order.types.ts

/**
 * OrderAttributes
 * Mewakili semua atribut yang terdapat pada model Order,
 * termasuk atribut yang otomatis disediakan oleh database.
 */
export interface OrderAttributes {
  id: number;
  userId: number;
  status: string;
  totalAmount: number;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * OrderCreationAttributes
 * Mewakili atribut yang diperlukan saat membuat data baru pada model Order.
 * Dalam hal ini, 'userId', 'status', dan 'totalAmount' wajib diberikan.
 */
export interface OrderCreationAttributes {
  userId: number;
  status: string;
  totalAmount: number;
}

/**
 * OrderUpdateAttributes
 * Mewakili atribut yang bisa diperbarui pada model Order.
 * Semua properti bersifat opsional karena tidak semua atribut akan diperbarui.
 */
export interface OrderUpdateAttributes {
  userId?: number;
  status?: string;
  totalAmount?: number;
}

/**
 * OrderResponse
 * Tipe untuk respons API yang mengembalikan data Order tunggal.
 */
export interface OrderResponse {
  success: boolean;
  message: string;
  data?: OrderAttributes | null;
}

/**
 * OrdersResponse
 * Tipe untuk respons API yang mengembalikan daftar Order.
 */
export interface OrdersResponse {
  success: boolean;
  message: string;
  data: OrderAttributes[];
}

/**
 * OrderDeleteResponse
 * Tipe untuk respons API saat menghapus data Order.
 */
export interface OrderDeleteResponse {
  success: boolean;
  message: string;
}
