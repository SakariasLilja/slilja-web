import { SALT } from "@/services/encryptService"
import { addUser, getUsers, userExists } from "@/services/userService"
import { hashSync } from "bcryptjs"
import { z } from "zod"

const userValidator = z.object({
    email: z.string().email(),
    password: z.string()
})

const GET = async () => {
    return Response.json(await getUsers())
}

const POST = async (req: Request) => {
    const data = await req.formData()
    if(!(data.has('email') && data.has('password'))) {
        return Response.json({ status: 400, error: 'Invalid input' })
    }

    const body = {
        email: data.get('email')!.toString(),
        password: data.get('password')!.toString()
    }

    const validationRes = userValidator.safeParse(body)
    if(validationRes.error) {
        return Response.json({ status: 400, error: 'Invalid input' })
    }

    const encryptedEmail = hashSync(validationRes.data.email.valueOf(), SALT)
    const encryptedPassword = hashSync(validationRes.data.password.valueOf(), SALT)

    if(await userExists(encryptedEmail)) {
        return Response.json({ status: 403, error: 'User already exists' })
    }

    await addUser({email: encryptedEmail, password: encryptedPassword})
    return Response.json({status: 201, message: 'New user registered successfully' })
}

export { GET, POST }