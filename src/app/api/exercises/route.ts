const users = [
    { name: "Mike" },
    { name: "John" },
];

export async function GET() {
    return Response.json(users);
}