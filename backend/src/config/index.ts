import dotenv from 'dotenv';

type ServerConfigType = {
    PORT: number;
    SALT_ROUND: number;
}

function loadEnv() {
    dotenv.config();
    console.log('Environment variables loaded');
}

loadEnv();

export const serverConfig: ServerConfigType = {
    PORT: Number(process.env.PORT) || 3000,
    SALT_ROUND: Number(process.env.PORT) || 10
};