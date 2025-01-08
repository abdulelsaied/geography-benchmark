import { Pool } from "pg"
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
    connectionString: "postgres://default:iUHxRvbW73KV@ep-fancy-surf-a64wcnei-pooler.us-west-2.aws.neon.tech:5432/verceldb?sslmode=require"
})

export default pool;
