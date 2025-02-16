"use server"

import { addUser, getUser } from "@/services/userService";
import { hashSync } from "bcryptjs";
import { UserErrors, userSchema } from "./schemas";

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
            errors: {
                email: ['Email already in use.']
            }
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