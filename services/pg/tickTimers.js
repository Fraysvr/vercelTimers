const knex = require("knex")(require("./knexConfig"));

const tickTimers = async (userId, isActive) => {
  if (isActive === "true") {
    const activeTimers = await knex("usersTimers").where({
      userId: userId,
      isActive: true,
    });
    activeTimers.forEach((timer) => {
      timer["progress"] = Date.now() - timer.start;
    });
    return activeTimers.reverse();
  } else {
    const oldTimers = await knex("usersTimers")
      .where({
        userId: userId,
        isActive: false,
      })
      .orderBy("end", "desc");
    return oldTimers;
  }
};

module.exports = tickTimers;
