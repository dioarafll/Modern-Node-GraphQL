

// src/models/Cart.ts

import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';
import { CartAttributes, CartCreationAttributes } from '../types/cart.types';

/**
 * Class Cart
 * Mewakili model Cart dengan atribut-atributnya.
 */
class Cart extends Model<CartAttributes, CartCreationAttributes> 
  implements CartAttributes {
  public id!: number;
  public userId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

/**
 * Inisialisasi model Cart
 */
Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Cart',
    tableName: 'carts',
    timestamps: true, // Mengaktifkan createdAt dan updatedAt secara otomatis
  }
);

export default Cart;
