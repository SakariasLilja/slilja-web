import Database from "./schemas/Database";
import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";

// Instantiates a new connection to the database running on localhost port 5432
const dialect = new PostgresDialect({
    pool: new Pool({
        database: process.env.PGDATABASE,
        host: process.env.PGHOST,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        port: parseInt(process.env.PGPORT || ''),
    })
})

// Exports the database for access elsewhere
export const db = new Kysely<Database>({
    dialect,
})