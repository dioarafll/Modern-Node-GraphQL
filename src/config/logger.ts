import { createLogger, format, transports } from 'winston';
import path from 'path';

// Format logging untuk produksi dan development
const { combine, timestamp, printf, colorize, errors } = format;

// Format custom untuk log output
const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

// Buat logger instance
export const logger = createLogger({
  level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
  format: combine(
    timestamp(),  // Tambahkan timestamp di setiap log
    errors({ stack: true }),  // Tangani error dengan stack trace
    logFormat  // Gunakan format custom yang telah dibuat
  ),
  transports: [
    // Log ke console dengan warna saat development
    new transports.Console({
      format: combine(
        colorize(),  // Warnai level log (error, warn, info)
        logFormat
      )
    }),
    // Log ke file saat environment produksi
    new transports.File({ 
      filename: path.join(__dirname, '../../logs/error.log'),
      level: 'error' // Hanya log error di file ini
    }),
    new transports.File({ 
      filename: path.join(__dirname, '../../logs/combined.log'),
      level: 'info' // Log level info ke atas (info, warn, error) di file ini
    })
  ]
});

// Contoh cara penggunaan logger
//logger.error('Error log example');
//logger.warn('Warn log example');
//logger.info('Info log example');
//logger.debug('Debug log example');
