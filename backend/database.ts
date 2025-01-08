import { Pool } from "pg"

console.log(process.env.DATABASE_CONNECTION_STRING);

const pool = new Pool({
    connectionString: process.env.DATABASE_CONNECTION_STRING
})

export default pool;
