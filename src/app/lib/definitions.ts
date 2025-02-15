import { z } from "zod";

export const RegisterUserSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z
        .string()
        .min(6, { message: 'Be at least 6 characters long' })
        .max(64, { message: 'Be at most 64 characters long' })
})