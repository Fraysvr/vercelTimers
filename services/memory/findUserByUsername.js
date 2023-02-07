const DB = require("./DB");

const findUserByUsername = async (username) =>
  DB.users.find((u) => u.username === username);

module.exports = findUserByUsername;
