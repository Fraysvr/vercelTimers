const getDb = require("./db");

const findTimerByTimerId = async (userId, timerId) => {
  const db = await getDb();
  const timer = await db.collection("usersTimers").findOne({
    userId: userId,
    id: timerId
  });
  return timer;
};

module.exports = findTimerByTimerId;
