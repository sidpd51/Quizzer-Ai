import { Prisma } from "@prisma/client";
import { prismaClient } from "../prisma/client";

export const createTest = async (payload: Prisma.TestCreateInput) => {
    const test = await prismaClient.test.create({
        data: payload, select: {
            id: true,
            subject: true,
            description: true,
            questionCount: true,
            difficulty: true,
            tags: true
        }
    });
    return test;
}