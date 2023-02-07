const express = require("express");
const nunjucks = require("nunjucks");
const auth = require("./middlewares/auth");
const cookieParser = require("cookie-parser");
const path = require("path");
require("dotenv").config();

const app = express();
nunjucks.configure(path.join(__dirname, 'views'), {
  autoescape: true,
  express: app,
  tags: {
    blockStart: "[%",
    blockEnd: "%]",
    variableStart: "[[",
    variableEnd: "]]",
    commentStart: "[#",
    commentEnd: "#]",
  },
});
app.set("view engine", "njk");
app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));
app.use("/login", require("./routes/login"));
app.use("/signup", require("./routes/signup"));
app.use("/logout", require("./routes/logout"));
app.use("/api/timers", require("./routes/timers"));
app.get("/", auth(), (req, res) => {
  res.render("index", {
    user: req.user,
    t: req.timers,
    authError:
      req.query.authError === "true"
        ? "Wrong username or password"
        : req.query.authError,
    signupError:
      req.query.signupError === "true"
        ? "Username already exists"
        : req.query.signupError,
    signupSuccess:
      req.query.signupSuccess === "true"
        ? "Signup successful"
        : req.query.signupSuccess,
  });
});

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`  Listening on http://localhost:${port}`);
});