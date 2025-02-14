import { db } from "@/database"
import { NewUser, UserUpdate } from "@/types";
import { encrypt } from "./encryptService";

const userExists = async (email: string) => {
    const user = await db.selectFrom('users').selectAll().where('email', '=', email).execute()
    return user.length > 0
}

const getUsers = async () => {
    return await db.selectFrom('users').selectAll().execute()
}

const addUser = async (user: NewUser) => {
    await db.insertInto('users').values(user).execute()
}

const updateUser = async (password: string, user: UserUpdate) => {
    const encryptedPassword = encrypt(password)
    await db.updateTable('users').set(user).where('password', '=', encryptedPassword).execute()
}

const deleteUser = async (email: string) => {
    const encryptedEmail = encrypt(email)
    return await db.deleteFrom('users').where('email', '=', encryptedEmail).returningAll().execute()
}

const register = async (formData: FormData): Promise<'null-fields' | 'exists' | 'ok'> => {
    const user = { email: formData.get('email')?.toString(), password: formData.get('password')?.toString() }
    if(!(typeof user.email !== undefined && typeof user.password !== undefined)) {
        return 'null-fields'
    }

    const encryptedUsername = encrypt(user.email!)
    const encryptedPassword = encrypt(user.password!)

    if(await userExists(encryptedUsername)) {
        return 'exists'
    }

    await addUser({ email: encryptedUsername, password: encryptedPassword})
    return 'ok'
}

export { addUser, updateUser, deleteUser, getUsers, register }