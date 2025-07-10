import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';

dotenv.config();

export const serverConfig = {
  PORT: Number(process.env.PORT) || 3000,
  SALT_ROUND: Number(process.env.SALT_ROUND) || 10,
  JWT_SECRET: process.env.JWT_SECRET || 'default_secret',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1h',
};

export const corsOptions = {
  origin: process.env.FRONTEND_URL,
};

export const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 7,
  message: 'Too many requests from this IP, please try again later.',
});
