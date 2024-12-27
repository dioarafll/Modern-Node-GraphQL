
// src/models/OrderItem.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import { OrderItemAttributes, OrderItemCreationAttributes } from '../types/orderItem.types';

/**
 * Class OrderItem
 * Mewakili model OrderItem dengan atribut-atributnya.
 */
class OrderItem extends Model<OrderItemAttributes, OrderItemCreationAttributes> 
  implements OrderItemAttributes {
  public id!: number;
  public orderId!: number;
  public productId!: number;
  public quantity!: number;
  public price!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

/**
 * Inisialisasi model OrderItem
 */
OrderItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    orderId: {
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
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'OrderItem',
    tableName: 'order_items', // Nama tabel sesuai dengan konvensi plural
    timestamps: true, // Mengaktifkan createdAt dan updatedAt secara otomatis
  }
);

export default OrderItem;
