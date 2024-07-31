const { Pool } = require('pg');

const db = {
    user: 'postgres',
    host: '192.168.1.134',
    database: 'postgres',
    password: '',
    port: 5432
}

const pool = new Pool(db);

module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
  };
