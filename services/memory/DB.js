const { nanoid } = require("nanoid");
const hash = require("../passwordHash");
const DB = {
  users: [
    {
      id: nanoid(),
      username: "admin",
      password: hash("pwd007"),
    },
  ],
  sessions: {},
  timers: [],
};

module.exports = DB;
