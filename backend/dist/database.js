"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
console.error(process.env.DATABASE_CONNECTION_STRING);
const pool = new pg_1.Pool({
    connectionString: process.env.DATABASE_CONNECTION_STRING
});
exports.default = pool;
