

// src/models/CartItem.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import { CartItemAttributes, CartItemCreationAttributes } from '../types/cartItem.types';

/**
 * Class CartItem
 * Mewakili model CartItem dengan atribut-atributnya.
 */
class CartItem extends Model<CartItemAttributes, CartItemCreationAttributes> 
  implements CartItemAttributes {
  public id!: number;
  public cartId!: number;
  public productId!: number;
  public quantity!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

/**
 * Inisialisasi model CartItem
 */
CartItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'CartItem',
    tableName: 'cart_items',
    timestamps: true, // Mengaktifkan createdAt dan updatedAt secara otomatis
  }
);

export default CartItem;
