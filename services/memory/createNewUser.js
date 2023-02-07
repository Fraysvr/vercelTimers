const { nanoid } = require("nanoid");
const DB = require("./DB");
const hash = require("../passwordHash");

const createNewUser = async (username, password) => {
  const newUser = {
    id: nanoid(),
    username: username,
    password: hash(password),
  };
  DB.users.push(newUser);
  return newUser;
};

module.exports = createNewUser;
