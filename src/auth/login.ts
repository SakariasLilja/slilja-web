"use server"

import { getUser } from "@/services/userService";
import { UserErrors, userSchema } from "./schemas";
import { compareSync } from "bcryptjs";

export const login = async (data: UserErrors, formData: FormData): Promise<UserErrors> => {
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

    const userArr = await getUser(res.data.email)

    if (userArr.length < 1) {
        return {
            success: false,
            errors: {
                email: ['No user of this email exists.']
            }
        }
    }

    const user = userArr[0]
    const passMatch = compareSync(res.data.password, user.password)

    if (!passMatch) {
        return {
            success: false,
            errors: {
                password: ['Incorrect password!']
            }
        }
    }

    return {
        success: true
    }
}