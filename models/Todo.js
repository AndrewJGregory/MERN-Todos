const { Schema, model } = require("mongoose");

const TodoSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  user: { type: Schema.Types.ObjectId, required: true, ref: "users" },
  date: { type: Date, default: Date.now },
  complete: { type: Boolean, default: false },
});

module.exports = Todo = model("todos", TodoSchema);
