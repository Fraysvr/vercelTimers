const findTimerByTimerId = require("./findTimerByTimerId");

const stopTimer = async (userId, timerId) => {
  const timer = await findTimerByTimerId(userId, timerId);
  timer.isActive = false;
  timer.end = Date.now();
  timer.duration = timer.end - timer.start;
  return timer;
};

module.exports = stopTimer;
