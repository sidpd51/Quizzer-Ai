import { z } from "zod";
const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const signInSchema = z.object({
    email: z.string({
        required_error: "Email is required",
    }).email("Invalid email address"),
    password: z.string({
        required_error: "Password is required",
    }).regex(strongPasswordRegex, "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
});


export type SignInType = z.infer<typeof signInSchema>;