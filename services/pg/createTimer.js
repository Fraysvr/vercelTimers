const knex = require("knex")(require("./knexConfig"));

const createTimer = async (id, description) => {
  const [timer] = await knex("usersTimers")
    .insert({
      userId: id,
      description: description,
      start: Date.now(),
    })
    .returning("*");
  return timer;
};

module.exports = createTimer;
