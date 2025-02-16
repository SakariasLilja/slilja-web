"use server"

import { addUser, getUser } from "@/services/userService";
import { hashSync } from "bcryptjs";
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
    redirect?: 'register' | 'login'
}

export const register = async (data: UserErrors, formData: FormData): Promise<UserErrors> => {
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

    const checkExists = await getUser(res.data.email)
    if (checkExists.length > 0) {
        return {
            success: false,
            redirect: 'login'
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