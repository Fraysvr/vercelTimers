const getDb = require("./db");

const tickTimers = async (userId, isActive) => {
  const db = await getDb();
  if (isActive === "true") {
    const activeTimers = await db
      .collection("usersTimers")
      .find({
        userId: userId,
        isActive: true
      })
      .toArray();
    activeTimers.forEach((timer) => {
      timer["progress"] = Date.now() - timer.start;
    });
    return activeTimers.reverse();
  } else {
    const oldTimers = await db
      .collection("usersTimers")
      .find({
        userId: userId,
        isActive: false
      })
      .sort({ end: -1 })
      .toArray();
    oldTimers.forEach((timer) => {
      timer["duration"] = timer.end - timer.start;
    });
    return oldTimers;
  }
};

module.exports = tickTimers;
