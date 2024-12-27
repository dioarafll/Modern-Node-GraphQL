

// src/models/Payment.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import { PaymentAttributes, PaymentCreationAttributes } from '../types/payment.types';

/**
 * Class Payment
 * Mewakili model Payment dengan atribut-atributnya.
 */
class Payment extends Model<PaymentAttributes, PaymentCreationAttributes>
  implements PaymentAttributes {
  public id!: number;
  public orderId!: number;
  public amount!: number;
  public status!: string;
  public method!: string;
  public readonly createdAt!: Date;
}

Payment.init(
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
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    method: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Payment',
    tableName: 'payments', // Gunakan nama tabel jamak
    timestamps: true, // Mengaktifkan createdAt secara otomatis
    updatedAt: false, // Matikan updatedAt jika tidak digunakan
  }
);

export default Payment;
