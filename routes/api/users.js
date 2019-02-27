const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");

router.post("/signup", (req, res) => {
  User.findOne({ username: req.body.username }).then(user => {
    if (user) {
      return res
        .status(400)
        .json({ username: "This username has already been taken" });
    } else {
      const { username, password } = req.body;
      const newUser = new User({
        username,
        password,
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

module.exports = router;
