const { Pool } = require('pg');//npm i pg

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'postgres',
    password: '12345abc'
});

pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error acquiring client', err.stack)
    }
    client.query('SELECT NOW()', (err, result) => {
    release()
    if (err) {
        return console.error('Error executing query', err.stack)
    }
    console.log(result.rows)
    });
});