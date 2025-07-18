import { Prisma } from "@prisma/client";
import { createTest } from "../repositories/test.repository";

export const createTestService = async (payload: Prisma.TestCreateInput) => {
    const user = await createTest(payload);
    return user;
}