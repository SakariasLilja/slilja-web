"use server"

import { addUser } from "@/services/userService";
import { hashSync } from "bcryptjs";
import { z } from "zod";

const userSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email.' }),
    password: z
        .string()
        .min(4, { message: 'Password must be at least 4 characters long.' })
        .max(20, { message: 'Password may be at most 20 characters long.' })
})

export interface RegisterErrors {
    errors?: {
        email?: string[]
        password?: string[]
    }
    success: boolean
}

export const register = async (data: RegisterErrors, formData: FormData): Promise<RegisterErrors> => {
    const res = userSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
    })

    if (!res.success) {
        return {
            errors: res.error.flatten().fieldErrors,
            success: false
        }
    }

    const pass_hash = hashSync(res.data!.password)
    await addUser({
        email: res.data!.email,
        password: pass_hash
    })

    return {
        success: true
    }
}