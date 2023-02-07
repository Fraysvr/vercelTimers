const DB = require("./DB");

const findUserBySessionID = async (sessionId) => {
  const userId = DB.sessions[sessionId];
  if (!userId) {
    return;
  }
  return DB.users.find((u) => u.id === userId);
};

module.exports = findUserBySessionID;
