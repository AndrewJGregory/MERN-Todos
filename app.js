const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require("./routes/api/users");
const passport = require("passport");
require("./config/passport.js")(passport);

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Successfully connected to db"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use(passport.initialize());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}`));
