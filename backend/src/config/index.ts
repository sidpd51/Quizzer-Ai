import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import rateLimit from 'express-rate-limit';

type ServerConfigType = {
    PORT: number;
    SALT_ROUND: string;
}

function loadEnv() {
    dotenv.config();
    console.log('Environment variables loaded');
}

loadEnv();

export const serverConfig: ServerConfigType = {
    PORT: Number(process.env.PORT) || 3000,
    SALT_ROUND: bcrypt.genSaltSync(Number(process.env.SALT_ROUND) || 10)
};

export const corsOptions = {
    origin: process.env.FRONTEND_URL,
}

export const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 7,
    message: 'Too many requests from this IP, please try again later.'
});