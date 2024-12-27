
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import { ProductAttributes, ProductCreationAttributes } from '../types/product.types';

class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public price!: number;
  public stock!: number;
  public categoryId!: number | null;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: true, // Category ID boleh null
    },
  },
  {
    sequelize,
    modelName: 'Product',
    tableName: 'products', // Nama tabel dalam database
    timestamps: true, // Mengaktifkan createdAt dan updatedAt
  }
);

export default Product;
