const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Todo = require("../../models/Todo");
const validateTodoInput = require("../../validation/todos");
const normalize = require("../../config/normalize");

router.get("/", index);
router.get("/user/:user_id", userShow);
router.get("/:id", show);
router.post("/", passport.authenticate("jwt", { session: false }), create);
router.patch("/:id", passport.authenticate("jwt", { session: false }), update);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  destroy,
);

function index(req, res) {
  Todo.find()
    .sort({ date: -1 })
    .then(todos => {
      User.find({ _id: { $in: todos.map(todo => todo.user) } }).then(users => {
        const sanitizedUsers = users.map(({ username, _id }) => ({
          username,
          _id,
        }));
        return res.json({
          todos: normalize(todos),
          users: normalize(sanitizedUsers),
        });
      });
    })
    .catch(err => res.status(404).json(err));
}

function show(req, res) {
  Todo.findById(req.params.id)
    .then(todo => res.json(todo))
    .catch(err => res.status(404).json(err));
}

function userShow(req, res) {
  Todo.find({ user: req.params.user_id })
    .then(todos => res.json(todos))
    .catch(err => res.status(404).json(err));
}

function create(req, res) {
  const { errors, isValid } = validateTodoInput(req.body.todo);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newTodo = new Todo({
    content: req.body.todo.content,
    user: req.body.todo.user.id,
  });

  newTodo.save().then(todo => res.json(normalize([todo])));
}

async function update(req, res) {
  const { errors, isValid } = validateTodoInput(req.body.todo);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { content, complete } = req.body.todo;
  const newTodo = await Todo.findByIdAndUpdate(
    req.params.id,
    { content, complete },
    { new: true },
  );
  return res.json(normalize([newTodo]));
}

async function destroy(req, res) {
  const result = await Todo.deleteOne({
    _id: req.params.id,
  });
  if (result.deletedCount === 1) {
    return res.json({ id: req.params.id });
  } else {
    return res.status(400).json({
      error:
        "There was a problem deleting that todo. Please refresh your page.",
    });
  }
}
module.exports = router;
