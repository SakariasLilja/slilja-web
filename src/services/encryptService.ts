import { genSaltSync } from "bcryptjs";

export const SALT = genSaltSync(11)