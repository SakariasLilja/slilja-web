import { scryptSync } from "node:crypto"

const encrypt = (text: string) => {
    const out = scryptSync(text, 'salt', 64)
    return out.toString("utf8")
}

export { encrypt }