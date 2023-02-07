const hash = require("../services/passwordHash");

exports.seed = async function (knex) {
  if (knex("users").where({ username: "admin" })) return;
  await knex("users").insert({
    id: 1,
    username: "admin",
    password: hash("pwd007"),
  });
};
