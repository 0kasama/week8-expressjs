const fs = require('fs')
const pool = require('../queries');
const seedQuery = fs.readFileSync('db/seeding.sql', {encoding: 'utf8'})

pool.query (seedQuery, (err, res) => {
    console.log(err, res);
    console.log("Seeding Complete");
    pool.end()
})