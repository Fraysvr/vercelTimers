const DB = require("./DB");

const deleteSession = async (sessionId) => {
  delete DB.sessions[sessionId];
};

module.exports = deleteSession;
