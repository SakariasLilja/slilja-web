import { betterAuth } from "better-auth";
import { db } from "@/database";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
    database: {
        db: db,
        type: "postgres"
    },
    emailAndPassword: {
        enabled: true
    },
    user: {
        modelName: "app_user"
    },
    plugins: [nextCookies()]
})