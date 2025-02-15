import { getUsers } from "@/services/userService";

export async function GET() {
    return Response.json(await getUsers());
}