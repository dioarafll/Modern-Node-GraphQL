

// src/models/Category.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import { CategoryAttributes, CategoryCreationAttributes } from '../types/category.types';

/**
 * Class Category
 * Mewakili model Category dengan atribut-atributnya.
 */
class Category extends Model<CategoryAttributes, CategoryCreationAttributes> 
  implements CategoryAttributes {
  public id!: number;
  public name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

/**
 * Inisialisasi model Category
 */
Category.init(
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
  },
  {
    sequelize,
    modelName: 'Category',
    tableName: 'categories', // Nama tabel sesuai dengan konvensi plural
    timestamps: true, // Mengaktifkan createdAt dan updatedAt secara otomatis
  }
);

export default Category;
