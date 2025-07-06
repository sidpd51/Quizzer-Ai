import { Prisma } from "@prisma/client";
import { prismaClient } from "../prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { ConflictError } from "../utils/errors/app.error";
import bcrypt from 'bcrypt';
import { serverConfig } from "../config";

export const createUser = async (payload: Prisma.UserCreateInput) => {
    try {
        payload.password = bcrypt.hashSync(payload.password, serverConfig.SALT_ROUND);
        console.log(payload)
        const user = await prismaClient.user.create({
            data: payload, select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                updatedAt: true
            }
        });
        return user;
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                throw new ConflictError("A User with this email already exists. Please choose a different email")
            }
        };
    }
}