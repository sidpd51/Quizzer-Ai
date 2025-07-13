import { serverConfig } from "../config";
import jwt from 'jsonwebtoken';


export const generateRefreshToken = async (id: string) => {
    const token = jwt.sign({ id }, serverConfig.REFRESH_SECRET, { expiresIn: "7d" });
    return token;
}

export const generateAccessToken = async (id: string) => {
    const token = jwt.sign({ id }, serverConfig.ACCESS_SECRET, { expiresIn: "50s" });
    return token;
}

export const verifyRefreshToken = (token: string) => {
    return jwt.verify(token, serverConfig.REFRESH_SECRET);
};

export const verifyAccessToken = (token: string) => {
    return jwt.verify(token, serverConfig.ACCESS_SECRET);
};
