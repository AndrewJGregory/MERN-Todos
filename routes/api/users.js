const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const Todo = require("../../models/Todo");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const validateSignupInput = require("../../validation/signup");
const validateSigninInput = require("../../validation/signin");
const normalize = require("../../config/normalize");

router.post("/signup", signup);
router.post("/signin", signin);
router.get(
  "/:username",
  passport.authenticate("jwt", { session: false }),
  userShow,
);

async function userShow(req, res) {
  let user = await User.findOne({ username: req.params.username });
  const todos = await Todo.find({ user });
  user = { username: user.username, _id: user._id };
  res.json({ todos: normalize(todos), user: normalize([user]) });
}

function signup(req, res) {
  const { username, password } = req.body;
  const { errors, isValid } = validateSignupInput({ username, password });
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ username }).then(user => {
    if (user) {
      return res
        .status(400)
        .json({ username: "This username has already been taken" });
    } else {
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
            .then(({ username, _id }) => {
              jwt.sign(
                { username, _id },
                keys.secretOrKey,
                { expiresIn: 3600 },
                (err, token) => {
                  res.json({ success: true, token: "Bearer " + token });
                },
              );
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
}

function signin(req, res) {
  const { username, password } = req.body;
  const { errors, isValid } = validateSigninInput({ username, password });
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ username }).then(user => {
    if (!user) {
      return res
        .status(404)
        .json({ username: "We could not find a user with that username." });
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { username: user.username, _id: user.id };
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({ success: true, token: `Bearer ${token}` });
          },
        );
      } else {
        return res.status(400).json({ password: "incorrect password" });
      }
    });
  });
}

module.exports = router;
