const { nanoid } = require("nanoid");
const knex = require("knex")(require("./knexConfig"));

const createSession = async (userId) => {
  const sessionId = nanoid();
  await knex("sessions").insert({ userId: userId, sessionId: sessionId });

  return sessionId;
};

module.exports = createSession;
