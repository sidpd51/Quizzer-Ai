import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import rateLimit from 'express-rate-limit';

type ServerConfigType = {
    PORT: number;
    SALT_ROUND: string;
    REFRESH_SECRET: string;
    ACCESS_SECRET: string;
}

function loadEnv() {
    dotenv.config();
    console.log('Environment variables loaded');
}

loadEnv();

export const serverConfig: ServerConfigType = {
    PORT: Number(process.env.PORT) || 3000,
    SALT_ROUND: bcrypt.genSaltSync(Number(process.env.SALT_ROUND) || 10),
    REFRESH_SECRET: process.env.JWT_SECRET || 'secret',
    ACCESS_SECRET: process.env.JWT_SECRET || 'secret'
};

export const corsOptions = {
    origin: process.env.FRONTEND_URL,
    credentials: true,
}

export const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 7,
    message: 'Too many requests from this IP, please try again later.'
});