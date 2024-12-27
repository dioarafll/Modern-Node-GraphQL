

// src/types/payment.types.ts

/**
 * PaymentAttributes
 * Mewakili semua atribut yang terdapat pada model Payment,
 * termasuk atribut yang otomatis disediakan oleh database.
 */
export interface PaymentAttributes {
  id: number;
  orderId: number;
  amount: number;
  status: string;
  method: string;
  createdAt: Date;
}

/**
 * PaymentCreationAttributes
 * Mewakili atribut yang diperlukan saat membuat data baru pada model Payment.
 */
export interface PaymentCreationAttributes {
  orderId: number;
  amount: number;
  status: string;
  method: string;
}

/**
 * PaymentUpdateAttributes
 * Mewakili atribut yang bisa diperbarui pada model Payment.
 * Semua properti bersifat opsional karena tidak semua atribut akan diperbarui.
 */
export interface PaymentUpdateAttributes {
  orderId?: number;
  amount?: number;
  status?: string;
  method?: string;
}

/**
 * PaymentResponse
 * Tipe untuk respons API yang mengembalikan data Payment tunggal.
 */
export interface PaymentResponse {
  success: boolean;
  message: string;
  data?: PaymentAttributes | null;
}

/**
 * PaymentsResponse
 * Tipe untuk respons API yang mengembalikan daftar Payment.
 */
export interface PaymentsResponse {
  success: boolean;
  message: string;
  data: PaymentAttributes[];
}

/**
 * PaymentDeleteResponse
 * Tipe untuk respons API saat menghapus data Payment.
 */
export interface PaymentDeleteResponse {
  success: boolean;
  message: string;
}
