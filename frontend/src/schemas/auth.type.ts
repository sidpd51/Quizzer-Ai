import { z } from 'zod';
const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const signUpSchema = z.object({
    name: z.string().min(1, "Name should atleast have one character"),
    email: z.string().email("Invalid email address"),
    password: z.string().regex(strongPasswordRegex, "Password must be 8+ chars with uppercase, lowercase, number, and special character."),
    confirmPassword: z.string().regex(strongPasswordRegex, "Password must be 8+ chars with uppercase, lowercase, number, and special character."),
}).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Passwords do not match",
});

export type SignUpFormType = z.infer<typeof signUpSchema>;