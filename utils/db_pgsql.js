const { Pool } = require('pg');//npm i pg
const pool = new Pool({
    host: process.env.HOST,
    user: process.env.DBUSER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
});

module.exports = pool;