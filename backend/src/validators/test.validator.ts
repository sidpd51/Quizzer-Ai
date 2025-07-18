import { z } from "zod";

export const difficultyEnum = z.enum(["EASY", "NORMAL", "HARD"]);

export const testSchema = z.object({
    subject: z.string(),
    description: z.string(),
    questionCount: z.number().int(),
    difficulty: difficultyEnum.default("EASY"),
    tags: z.string(),
});
