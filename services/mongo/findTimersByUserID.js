const getDb = require("./db");

const findTimerByUserId = async (userId) => {
  const db = await getDb();
  const timer = await db.collection("usersTimers").findOne({
    userId: userId
  });
  if (timer) timer.id = timer._id.toString();
  return timer;
};

module.exports = findTimerByUserId;
