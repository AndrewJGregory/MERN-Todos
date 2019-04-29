import { editTodo, fetchTodos } from "../../actions/todo_actions.js";

import TodoIndex from "./TodoIndex.js";
import { connect } from "react-redux";
import { todoArrSelector } from "../../util/selectors.js";

const msp = state => ({ todos: todoArrSelector(state) });
const mdp = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos()),
  editTodo: (id, content) => dispatch(editTodo(id, content)),
});

export default connect(
  msp,
  mdp,
)(TodoIndex);
