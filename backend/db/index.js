const { Pool } = require("pg");

const pool = new Pool({
  user: "db-prod",
  password: "I Love Cats 101$$**",
  host: "35.235.101.117",
  database: "production",
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
