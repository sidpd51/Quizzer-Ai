import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

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