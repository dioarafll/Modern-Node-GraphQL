import sequelize from '../config/database'; // Mengimpor instance sequelize dari konfigurasi database
import User from './User';
import Product from './Product';
import Category from './Category';
import Order from './Order';
import OrderItem from './OrderItem';
import Cart from './Cart';
import CartItem from './CartItem';
import Payment from './Payment';

// Asosiasi antar model
User.hasMany(Order, { foreignKey: 'userId' }); // Seorang User memiliki banyak Order
Order.belongsTo(User, { foreignKey: 'userId' }); // Order terkait dengan User

User.hasMany(Cart, { foreignKey: 'userId' }); // Seorang User memiliki banyak Cart
Cart.belongsTo(User, { foreignKey: 'userId' }); // Cart terkait dengan User

Product.belongsTo(Category, { foreignKey: 'categoryId' }); // Produk terkait dengan Category
Category.hasMany(Product, { foreignKey: 'categoryId' }); // Category memiliki banyak Produk

Order.hasMany(OrderItem, { foreignKey: 'orderId' }); // Order memiliki banyak OrderItem
OrderItem.belongsTo(Order, { foreignKey: 'orderId' }); // OrderItem terkait dengan Order

OrderItem.belongsTo(Product, { foreignKey: 'productId' }); // OrderItem terkait dengan Product
Product.hasMany(OrderItem, { foreignKey: 'productId' }); // Produk memiliki banyak OrderItem

Cart.hasMany(CartItem, { foreignKey: 'cartId' }); // Cart memiliki banyak CartItem
CartItem.belongsTo(Cart, { foreignKey: 'cartId' }); // CartItem terkait dengan Cart

CartItem.belongsTo(Product, { foreignKey: 'productId' }); // CartItem terkait dengan Product
Product.hasMany(CartItem, { foreignKey: 'productId' }); // Produk memiliki banyak CartItem

Order.hasOne(Payment, { foreignKey: 'orderId' }); // Order memiliki satu Payment
Payment.belongsTo(Order, { foreignKey: 'orderId' }); // Payment terkait dengan Order

// Fungsi untuk menyinkronkan database
const syncDatabase = async () => {
  try {
    // Gunakan { alter: true } untuk produksi, atau hapus untuk migrasi penuh
    await sequelize.sync({ alter: true });
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing database:', error instanceof Error ? error.message : error);
  }
};

// Ekspor semua komponen yang diperlukan
export {
  sequelize,
  syncDatabase,
  User,
  Product,
  Category,
  Order,
  OrderItem,
  Cart,
  CartItem,
  Payment,
};
