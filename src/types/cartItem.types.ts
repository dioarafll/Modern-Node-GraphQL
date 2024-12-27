

// src/types/cartItem.types.ts

/**
 * CartItemAttributes
 * Mewakili semua atribut yang terdapat pada model CartItem,
 * termasuk atribut yang otomatis disediakan oleh database.
 */
export interface CartItemAttributes {
  id: number;
  cartId: number;
  productId: number;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * CartItemCreationAttributes
 * Mewakili atribut yang diperlukan saat membuat data baru pada model CartItem.
 * Dalam hal ini, hanya 'cartId', 'productId', dan 'quantity' yang wajib diberikan.
 */
export interface CartItemCreationAttributes {
  cartId: number;
  productId: number;
  quantity: number;
}

/**
 * CartItemUpdateAttributes
 * Mewakili atribut yang bisa diperbarui pada model CartItem.
 * Semua properti bersifat opsional karena tidak semua atribut akan diperbarui.
 */
export interface CartItemUpdateAttributes {
  cartId?: number;
  productId?: number;
  quantity?: number;
}

/**
 * CartItemResponse
 * Tipe untuk respons API yang mengembalikan data CartItem tunggal.
 */
export interface CartItemResponse {
  success: boolean;
  message: string;
  data?: CartItemAttributes | null;
}

/**
 * CartItemsResponse
 * Tipe untuk respons API yang mengembalikan daftar CartItem.
 */
export interface CartItemsResponse {
  success: boolean;
  message: string;
  data: CartItemAttributes[];
}

/**
 * CartItemDeleteResponse
 * Tipe untuk respons API saat menghapus data CartItem.
 */
export interface CartItemDeleteResponse {
  success: boolean;
  message: string;
}
