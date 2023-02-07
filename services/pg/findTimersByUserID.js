const knex = require("knex")(require("./knexConfig"));

const findTimerByUserId = async (userId) => {
  const [timer] = await knex("usersTimers").where({ userId: userId });
  return timer;
};

module.exports = findTimerByUserId;
