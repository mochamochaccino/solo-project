const { Pool } = require('pg');

const db = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
}

const pool = new Pool(db);

module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
  };
