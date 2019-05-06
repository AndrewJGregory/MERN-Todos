const Todo = require("../models/Todo");
const User = require("../models/User");

module.exports = async function seedDatabase() {
  const andrew = await User.findOne({ username: "andrew" });
  const todos = [];
  let i = 0;
  while (i++ < 10)
    todos.push({
      content: `task #${Math.floor(Math.random() * 100)}`,
      user: andrew,
    });
  await Todo.insertMany(todos);
};
