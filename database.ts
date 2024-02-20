import { Pool } from "pg"

const connectionString = 'postgresql://geobenchmark_user:o4KCe362278txxQZXvK4CEY8xXvVWsZi@dpg-cn0keu6d3nmc73f3maag-a.oregon-postgres.render.com/geobenchmark?ssl=true'

const pool = new Pool({
    connectionString
});

export default pool;
