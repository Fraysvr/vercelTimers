const getDb = require("./db");
const hash = require("../passwordHash");

const createNewUser = async (username, password) => {
  const db = await getDb();
  await db
    .collection("users")
    .insertOne({ username, password: hash(password) });
};

module.exports = createNewUser;
