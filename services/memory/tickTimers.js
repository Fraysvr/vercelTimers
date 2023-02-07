const DB = require("./DB");

const tickTimers = async (userId, isActive) => {
  const timers = DB.timers[userId];
  if (timers.length !== 0) {
    const activeTimers = timers.filter((timer) => timer.isActive);
    const oldTimers = timers.filter((timer) => !timer.isActive);
    if (isActive === "true") {
      activeTimers.forEach((timer) => {
        timer.progress = Date.now() - timer.start;
      });
      return activeTimers;
    } else {
      return oldTimers;
    }
  } else {
    return timers;
  }
};

module.exports = tickTimers;
