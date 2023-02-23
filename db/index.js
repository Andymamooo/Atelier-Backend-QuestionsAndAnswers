const { Pool } = require('pg')
require('dotenv').config('../.env')

console.log(`dbtest is equal to ${process.env.DB_DATABASE}`)
const pool = new Pool({
  "host": '34.210.100.119',
  "user": 'andyma',
  "password": 'password',
  "port": 5432,
  "database":process.env.DB_DATABASE,
  "statement_timeout":3000
});

module.exports = {
 query(text, params, callback){
    return pool.query(text, params, callback)
  },
}
