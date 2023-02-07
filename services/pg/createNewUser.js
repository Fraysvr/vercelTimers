const knex = require("knex")(require("./knexConfig"));
const hash = require("../passwordHash");

const createNewUser = async (username, password) => {
  await knex("users").insert({ username: username, password: hash(password) });
};

module.exports = createNewUser;
