"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const connectionString = 'postgresql://geobenchmark_user:o4KCe362278txxQZXvK4CEY8xXvVWsZi@dpg-cn0keu6d3nmc73f3maag-a.oregon-postgres.render.com/geobenchmark?ssl=true';
const pool = new pg_1.Pool({
    connectionString
});
exports.default = pool;
