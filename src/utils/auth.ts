import { betterAuth } from "better-auth";
import { db } from "@/database";

export const auth = betterAuth({
    database: db,
    emailAndPassword: {
        enabled: true
    },
    user: {
        modelName: "app_user"
    }
})