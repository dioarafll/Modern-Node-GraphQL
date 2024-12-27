

// src/types/category.types.ts

/**
 * CategoryAttributes
 * Mewakili semua atribut yang terdapat pada model Category,
 * termasuk atribut yang otomatis disediakan oleh database.
 */
export interface CategoryAttributes {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * CategoryCreationAttributes
 * Mewakili atribut yang diperlukan saat membuat data baru pada model Category.
 * Dalam hal ini, hanya 'name' yang wajib diberikan.
 */
export interface CategoryCreationAttributes {
  name: string;
}

/**
 * CategoryUpdateAttributes
 * Mewakili atribut yang bisa diperbarui pada model Category.
 * Semua properti bersifat opsional karena tidak semua atribut akan diperbarui.
 */
export interface CategoryUpdateAttributes {
  name?: string;
}

/**
 * CategoryResponse
 * Tipe untuk respons API yang mengembalikan data Category tunggal.
 */
export interface CategoryResponse {
  success: boolean;
  message: string;
  data?: CategoryAttributes | null;
}

/**
 * CategoriesResponse
 * Tipe untuk respons API yang mengembalikan daftar Categories.
 */
export interface CategoriesResponse {
  success: boolean;
  message: string;
  data: CategoryAttributes[];
}

/**
 * CategoryDeleteResponse
 * Tipe untuk respons API saat menghapus data Category.
 */
export interface CategoryDeleteResponse {
  success: boolean;
  message: string;
}
