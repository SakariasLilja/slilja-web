import { z } from "zod";

export const userSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email.' }),
    password: z
        .string()
        .min(4, { message: 'Password must be at least 4 characters long.' })
        .max(20, { message: 'Password may be at most 20 characters long.' })
})

export interface UserErrors {
    errors?: {
        email?: string[]
        password?: string[]
    }
    success: boolean
}