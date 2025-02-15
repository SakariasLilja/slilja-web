import { db } from "@/database"
import { NewUser, UserUpdate } from "@/types";

const getUser = async (email: string) => {
    const user = await db.selectFrom('users').selectAll().where('email', '=', email).execute()
    return user
}

const getUsers = async () => {
    return await db.selectFrom('users').selectAll().execute()
}

const addUser = async (user: NewUser) => {
    await db.insertInto('users').values(user).execute()
}

const updateUser = async (password: string, user: UserUpdate) => {
    await db.updateTable('users').set(user).where('password', '=', password).execute()
}

const deleteUser = async (email: string) => {
    return await db.deleteFrom('users').where('email', '=', email).returningAll().execute()
}

export { getUser, addUser, updateUser, deleteUser, getUsers }