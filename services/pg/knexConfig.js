require("dotenv").config();

module.exports = {
  client: "pg",
  connection: {
    // eslint-disable-next-line no-undef
    host: process.env.DB_HOST,
    // eslint-disable-next-line no-undef
    port: process.env.DB_PORT || 5432,
    // eslint-disable-next-line no-undef
    database: process.env.DB_NAME,
    // eslint-disable-next-line no-undef
    user: process.env.DB_USER,
    // eslint-disable-next-line no-undef
    password: process.env.DB_PASSWORD,
  },
  pool: { min: 0, max: 7 },
};
