const knex = require("knex")(require("./knexConfig"));

const stopTimer = async (userId, timerId) => {
  const [timer] = await knex("usersTimers")
    .where({
      userId: userId,
      id: timerId,
    })
    .update({
      duration: knex.raw(`${Date.now()} - start`),
      end: Date.now(),
      isActive: "false",
    })
    .returning("*")
    .orderBy("end", "desc");

  return timer;
};

module.exports = stopTimer;
