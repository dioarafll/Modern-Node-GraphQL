
// src/models/User.ts
import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';
import { UserAttributes, UserCreationAttributes } from '../types/user.types';

/**
 * Menggunakan Optional di TypeScript untuk menentukan bahwa
 * `id`, `createdAt`, dan `updatedAt` tidak diperlukan saat
 * pembuatan model, sehingga sesuai dengan `UserCreationAttributes`.
 */
interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes {}

/**
 * Inisialisasi model User menggunakan Sequelize
 */
const User = sequelize.define<UserInstance>('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  timestamps: true,           // Otomatis menambahkan createdAt dan updatedAt
  modelName: 'User',           // Nama model dalam Sequelize
  tableName: 'users',          // Nama tabel dalam database
});

export default User;
