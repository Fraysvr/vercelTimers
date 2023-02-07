const DB = require("./DB");

const findTimerByTimerId = async (userId, timerId) => {
  const timer = DB.timers[userId].find((timer) => timer.id === timerId);
  return timer;
};

module.exports = findTimerByTimerId;
