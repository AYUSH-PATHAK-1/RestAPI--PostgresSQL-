const Pool = require("pg").Pool;
// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "students",
//   password: process.env.password,
//   port: 5432,
// });

const pool = new Pool({
  connectionString: process.env.DB_URL, // Use your environment variable here
  ssl: {
    rejectUnauthorized: false, // Use this option if your database requires SSL (most cloud providers do)
  },
});

module.exports = pool;
