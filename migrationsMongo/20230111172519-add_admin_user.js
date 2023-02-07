const hash = require("../services/passwordHash");

module.exports = {
  async up(db, client) {
    if (await db.collection("users").findOne({ username: "admin" })) return;
    await db.collection("users").insertOne({
      username: "admin",
      password: hash("pwd007")
    });
  },

  async down(db, client) {
    await db.collection("users").deleteOne({ username: "admin" });
  }
};
