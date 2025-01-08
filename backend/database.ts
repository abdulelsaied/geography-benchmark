import { Pool } from "pg"

console.error(process.env.DATABASE_CONNECTION_STRING);

const pool = new Pool({
    connectionString: process.env.DATABASE_CONNECTION_STRING
})

export default pool;
