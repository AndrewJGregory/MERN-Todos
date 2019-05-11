const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require("./routes/api/users");
const todos = require("./routes/api/todos");
const emails = require("./routes/api/emails");
const passport = require("passport");
const path = require("path");
const seedDatabase = require("./config/seeds");

require("./config/passport.js")(passport);

if (process.env.NODE_ENV === "production") {
  (async () => {
    app.use(express.static("frontend/build"));
    app.get("/", (req, res) => {
      res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
    });
    await seedDatabase();
  })();
}

// see: https://mongoosejs.com/docs/deprecations.html#-findandmodify-
mongoose
  .connect(db, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => console.log("Successfully connected to db"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/todos", todos);
app.use("/api/emails", emails);
app.use(passport.initialize());

const port = process.env.PORT || 5000;

// (async () => await seedDatabase())();

app.listen(port, () => console.log(`server is running on port ${port}`));
