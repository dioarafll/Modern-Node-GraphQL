

// src/types/orderItem.types.ts

/**
 * OrderItemAttributes
 * Mewakili semua atribut yang terdapat pada model OrderItem,
 * termasuk atribut yang otomatis disediakan oleh database.
 */
export interface OrderItemAttributes {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * OrderItemCreationAttributes
 * Mewakili atribut yang diperlukan saat membuat data baru pada model OrderItem.
 * Dalam hal ini, 'orderId', 'productId', 'quantity', dan 'price' wajib diberikan.
 */
export interface OrderItemCreationAttributes {
  orderId: number;
  productId: number;
  quantity: number;
  price: number;
}

/**
 * OrderItemUpdateAttributes
 * Mewakili atribut yang bisa diperbarui pada model OrderItem.
 * Semua properti bersifat opsional karena tidak semua atribut akan diperbarui.
 */
export interface OrderItemUpdateAttributes {
  orderId?: number;
  productId?: number;
  quantity?: number;
  price?: number;
}

/**
 * OrderItemResponse
 * Tipe untuk respons API yang mengembalikan data OrderItem tunggal.
 */
export interface OrderItemResponse {
  success: boolean;
  message: string;
  data?: OrderItemAttributes | null;
}

/**
 * OrderItemsResponse
 * Tipe untuk respons API yang mengembalikan daftar OrderItems.
 */
export interface OrderItemsResponse {
  success: boolean;
  message: string;
  data: OrderItemAttributes[];
}

/**
 * OrderItemDeleteResponse
 * Tipe untuk respons API saat menghapus data OrderItem.
 */
export interface OrderItemDeleteResponse {
  success: boolean;
  message: string;
}
