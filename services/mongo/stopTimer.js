const getDb = require("./db");

const stopTimer = async (userId, timerId) => {
  const db = await getDb();
  const timer = await db.collection("usersTimers").findOneAndUpdate(
    {
      userId: userId,
      id: timerId
    },
    {
      $set: {
        end: Date.now(),
        isActive: false
      }
    }
  );
  return timer;
};

module.exports = stopTimer;
