const knex = require("knex")(require("./knexConfig"));

const findTimerByTimerId = async (userId, timerId) => {
  const timer = await knex("usersTimers").where({
    userId: userId,
    id: timerId,
  });
  return timer;
};

module.exports = findTimerByTimerId;
