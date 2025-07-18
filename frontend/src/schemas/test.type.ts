import { z } from "zod";

const allowedLimits = ["10", "30", "50"];

export const TestSchema = z.object({
    subject: z.string().min(10, "Subject should atleast have 10 character"),
    description: z.string().min(20, "Subject should atleast have 20 character"),
    questionCount: z.string().refine((val) => allowedLimits.includes(val), {
        message: "Number of questions must be one of 10, 30, or 50",
    }),
    difficulty: z.enum(["EASY", "NORMAL", "HARD"]),
    tags: z.string().min(1, "Tags should atleast have one character"),
});

export type TestType = z.infer<typeof TestSchema>