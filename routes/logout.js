const deleteSession = require("../services").deleteSession;
const auth = require("../middlewares/auth");
const express = require("express");

const router = express.Router();

router.get("/", auth(), async (req, res) => {
  if (!req.user) {
    return res.redirect("/");
  }
    await deleteSession(req.sessionId);
    res.clearCookie("sessionId").redirect("/");
});

module.exports = router;
