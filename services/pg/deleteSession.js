const knex = require("knex")(require("./knexConfig"));

const deleteSession = async (sessionId) => {
  await knex("sessions").where({ sessionId: sessionId }).delete();
};

module.exports = deleteSession;
