import { Prisma } from "@prisma/client";
import { createUser, getUserByEmail } from "../repositories/user.repository";

import bcrypt from 'bcrypt';
import { SignInType } from "../validators/user.validator";
import { UnauthorizedError } from "../utils/errors/app.error";
import { generateAccessToken, generateRefreshToken } from "./token.service";

export const createUserService = async (payload: Prisma.UserCreateInput) => {
    const user = await createUser(payload);
    return user;
}

export const signInService = async (payload: SignInType) => {
    try {
        const user = await getUserByEmail(payload.email);
        const result = await comparePwd(payload.password, user!.password);
        if (!result) {
            throw new UnauthorizedError("Invalid password!");
        };
        const refreshToken = await generateRefreshToken(user!.id);
        const accessToken = await generateAccessToken(refreshToken);

        return { refreshToken, accessToken };
    } catch (error) {
        throw error;
    }
}

export const comparePwd = async (plainPwd: string, hasPwd: string) => {
    return bcrypt.compareSync(plainPwd, hasPwd);
}