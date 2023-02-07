const knex = require("knex")(require("./knexConfig"));

const findUserByUsername = async (username) =>
  await knex("users").select().where({ username }).first();

module.exports = findUserByUsername;
