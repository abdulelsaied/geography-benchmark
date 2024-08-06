"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    connectionString: "postgres://default:iUHxRvbW73KV@ep-fancy-surf-a64wcnei-pooler.us-west-2.aws.neon.tech:5432/verceldb?sslmode=require"
});
exports.default = pool;
