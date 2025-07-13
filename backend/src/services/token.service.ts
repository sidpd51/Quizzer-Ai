import { serverConfig } from "../config";
import jwt from 'jsonwebtoken';
import { UUIDTypes } from "uuid";


export const generateRefreshToken = async (id: UUIDTypes) => {
    const token = jwt.sign({ id }, serverConfig.REFRESH_SECRET, { expiresIn: "7d" });
    return token;
}

export const generateAccessToken = async (id: string) => {
    return jwt.sign({ id }, serverConfig.ACCESS_SECRET, { expiresIn: "15m" });
}

export const verifyRefreshToken = (token: string) => {
    return jwt.verify(token, serverConfig.REFRESH_SECRET);
};

export const verifyAccessToken = (token: string) => {
    return jwt.verify(token, serverConfig.ACCESS_SECRET);
};
