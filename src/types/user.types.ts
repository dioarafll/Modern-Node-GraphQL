
// src/types/user.types.ts

/**
 * UserAttributes
 * Mewakili semua atribut yang terdapat pada model User,
 * termasuk atribut yang otomatis disediakan oleh database
 */
export interface UserAttributes {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * UserCreationAttributes
 * Mewakili atribut yang diperlukan saat membuat data baru pada model User
 * hanya berisi properti yang wajib diberikan oleh pengguna
 */
export interface UserCreationAttributes {
  name: string;
  email: string;
}

/**
 * UserUpdateAttributes
 * Mewakili atribut yang bisa diperbarui pada model User
 * Semua properti bersifat opsional, karena tidak semua atribut akan diperbarui
 */
export interface UserUpdateAttributes {
  name?: string;
  email?: string;
}

/**
 * UserResponse
 * Tipe untuk respon API yang mengembalikan data User
 */
export interface UserResponse {
  success: boolean;
  message: string;
  data?: UserAttributes | null;
}

/**
 * UsersResponse
 * Tipe untuk respon API yang mengembalikan daftar User
 */
export interface UsersResponse {
  success: boolean;
  message: string;
  data: UserAttributes[];
}

/**
 * UserDeleteResponse
 * Tipe untuk respon API saat menghapus data User
 */
export interface UserDeleteResponse {
  success: boolean;
  message: string;
}
