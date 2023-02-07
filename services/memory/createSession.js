const { nanoid } = require("nanoid");
const DB = require("./DB");

const createSession = async (userId) => {
  const sessionId = nanoid();
  DB.sessions[sessionId] = userId;
  return sessionId;
};

module.exports = createSession;
