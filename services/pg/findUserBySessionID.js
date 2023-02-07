const knex = require("knex")(require("./knexConfig"));

const findUserBySessionID = async (sessionId) => {
  const session = await knex("sessions")
    .select()
    .where({ sessionId: sessionId })
    .first();
  if (!session) {
    return;
  }
  return knex("users").select().where({ id: session["userId"] }).first();
};

module.exports = findUserBySessionID;
