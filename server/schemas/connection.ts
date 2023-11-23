const { Pool } = require('pg');

const PG_URI = 'postgres://xfaoxtit:NGVrQ0YptifNP1izte1y4-qJVfUbU65z@berry.db.elephantsql.com/xfaoxtit';

const pool = new Pool({
    connectionString: PG_URI,
    ssl: {
        rejectUnauthorized: false,
      },
});

const db = {
    query: (text: any, params : any, callback: any) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
};

export default db;