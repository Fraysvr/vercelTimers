const { nanoid } = require("nanoid");
const getDb = require("./db");

const createTimer = async (id, description) => {
  const timerId = nanoid();
  const db = await getDb();
  const timer = {
    userId: id,
    id: timerId,
    description: description,
    start: Date.now(),
    isActive: true
  };
  await db.collection("usersTimers").insertOne(timer);
  console.log(timer);
  return timer;
};

module.exports = createTimer;
