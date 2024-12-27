
// src/config/db.ts
import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

// Load environment variables
config();

const DATABASE_URI = process.env.DATABASE_URI || '';

const sequelize = new Sequelize(DATABASE_URI, {
  dialect: 'postgres',
  logging: (msg: string) => console.log(`[Sequelize]: ${msg}`),
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

// Test koneksi ke database
export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export default sequelize;
