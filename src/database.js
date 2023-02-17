const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    database: process.env.PG_DB,
    password: process.env.PG_PASSWORD,
});

client.connect();

module.exports = client;