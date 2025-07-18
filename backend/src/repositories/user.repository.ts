import { Prisma } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import bcrypt from 'bcrypt';
import { serverConfig } from "../config";
import { prismaClient } from "../prisma/client";
import { ConflictError, NotFoundError } from "../utils/errors/app.error";

export const createUser = async (payload: Prisma.UserCreateInput) => {
    try {
        payload.password = bcrypt.hashSync(payload.password, serverConfig.SALT_ROUND);
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

export const getUserByEmail = async (email: string) => {

    const user = await prismaClient.user.findUnique({
        where: {
            email: email
        },
        select: {
            id: true,
            name: true,
            email: true,
            password: true
        }
    });
    if (!user) {
        throw new NotFoundError("User doesn't exist with this email!");
    }
    return user;

}

export const getUserById = async (id: string) => {
    const user = await prismaClient.user.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            name: true,
            email: true,
        }
    });
    if (!user) {
        throw new NotFoundError(`User doesn't exist with id: ${id}!`);
    }
    return user;

}