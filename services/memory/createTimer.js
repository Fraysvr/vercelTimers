const { nanoid } = require("nanoid");
const DB = require("./DB");

const createTimer = async (id, description) => {
  const newTimer = {
    id: nanoid(),
    description: description,
    start: Date.now(),
    end: 0,
    progress: 0,
    duration: 0,
    isActive: true,
  };
  DB.timers[id].push(newTimer);
  return newTimer;
};

module.exports = createTimer;
