const pg = require('pg');

//The client may need to change to process.env.DATABASE_URL before deployment
const client = new pg.Client({
    user: 'quickbeam',
    password: 'bilbo',
    database: 'eac_personalsite_db',
    host: 'localhost',
    port: 5432
});

module.exports = client;