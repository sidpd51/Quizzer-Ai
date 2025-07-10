import { Prisma } from "@prisma/client";
import { UUIDTypes } from "uuid";
import { createUser, getUserByEmail } from "../repositories/user.repository";
import { serverConfig } from "../config";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { SignInType } from "../validators/user.validator";
import { UnauthorizedError } from "../utils/errors/app.error";

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
        return createToken(user!.id);
    } catch (error) {
        throw error;
    }
}

export const createToken = async (id: UUIDTypes) => {
    const token = jwt.sign({ id }, serverConfig.JWT_SECRET, { expiresIn: "1hr" });
    return token;
}

export const comparePwd = async (plainPwd: string, hasPwd: string) => {
    return bcrypt.compareSync(plainPwd, hasPwd);
}