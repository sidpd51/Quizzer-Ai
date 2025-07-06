import { Prisma } from "@prisma/client";
import { createUser } from "../repositories/user.repository";

export const createUserService = async (payload: Prisma.UserCreateInput) => {
    const user = await createUser(payload);
    return user;
}