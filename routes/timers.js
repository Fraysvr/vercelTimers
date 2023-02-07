const auth = require("../middlewares/auth");
const createTimer = require("../services").createTimer;
const findTimersByUserID = require("../services").findTimersByUserID;
const findTimerByTimerId = require("../services").findTimerByTimerId;
const stopTimer = require("../services").stopTimer;
const express = require("express");
const needAuth = require("../middlewares/needAuth");
const tickTimers = require("../services").tickTimers;

const router = express.Router();

router.post("/", auth(), needAuth(), async (req, res) => {
  const newTimer = await createTimer(req.user.id, req.body.description);
  res.json(newTimer);
});

router.post("/:id/stop", auth(), needAuth(), async (req, res) => {
  if (!(await findTimerByTimerId(req.user.id, req.params.id))) {
    res.status(404);
    return;
  }
  return res.json(await stopTimer(req.user.id, req.params.id));
});

router.get("/", auth(), needAuth(), async (req, res) => {
  if (!(await findTimersByUserID(req.user.id))) {
    return res.json([]);
  }
  return res.json(await tickTimers(req.user.id, req.query.isActive));
});

module.exports = router;
