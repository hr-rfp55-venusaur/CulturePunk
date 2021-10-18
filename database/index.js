const { Pool } = require('pg');
const config = require('./config');

const pool = new Pool({
  user: config.user,
  host: config.host,
  database: config.database,
  password: config.password,
  port: config.port,
});

// eslint-disable-next-line no-unused-vars
pool.on('error', (error, client) => {
  // eslint-disable-next-line no-console
  console.error('Error in pool connection', error);
  process.exit(-1);
});

// module.exports = {
//   query: (text, params, callback) => pool.query(text, params, callback),
// };

module.exports = {
  query: (text, params, callback) => pool.query(text, params, (error, data) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log('Error pool.query', error);
      callback(error);
    } else {
      callback(null, data);
    }
  }),
};
