

// src/models/Order.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import { OrderAttributes, OrderCreationAttributes } from '../types/order.types';

/**
 * Class Order
 * Mewakili model Order dengan atribut-atributnya.
 */
class Order extends Model<OrderAttributes, OrderCreationAttributes> 
  implements OrderAttributes {
  public id!: number;
  public userId!: number;
  public status!: string;
  public totalAmount!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

/**
 * Inisialisasi model Order
 */
Order.init(
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
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    totalAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
    timestamps: true, // Mengaktifkan createdAt dan updatedAt secara otomatis
  }
);

export default Order;
