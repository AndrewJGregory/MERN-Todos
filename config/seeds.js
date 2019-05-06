const Todo = require("../models/Todo");
const User = require("../models/User");

module.exports = async function seedDatabase() {
  const randomUser = await User.aggregate([{ $sample: { size: 1 } }]);
  const todos = [];
  let i = 0;
  while (i++ < 10)
    todos.push({
      content: `task #${Math.floor(Math.random() * 100)}`,
      user: randomUser[0],
    });
  await Todo.insertMany(todos);
};
