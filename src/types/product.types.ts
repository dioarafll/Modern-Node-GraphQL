
/**
 * Interface untuk atribut Product yang disimpan dalam database.
 */
export interface ProductAttributes {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: number | null;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Interface untuk atribut Product saat pembuatan (create).
 * `id`, `createdAt`, dan `updatedAt` tidak perlu disediakan saat pembuatan data.
 */
export interface ProductCreationAttributes
  extends Omit<ProductAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

/**
 * Interface untuk atribut Product yang akan diperbarui (update).
 * Membuat semua atribut opsional kecuali `id`.
 */
export interface ProductUpdateAttributes
  extends Partial<Omit<ProductAttributes, 'id'>> {
  id: number;
}

/**
 * Interface untuk parameter penghapusan Product (delete).
 * Biasanya hanya membutuhkan `id`.
 */
export interface ProductDeleteAttributes {
  id: number;
}
