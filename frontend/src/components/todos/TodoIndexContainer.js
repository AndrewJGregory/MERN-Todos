import { deleteTodo, fetchTodos } from "../../actions/todo_actions.js";
import { editingTodoSelector, todoArrSelector } from "../../util/selectors.js";
import { setEditingTodo, setModal } from "../../actions/ui_actions";

import TodoIndex from "./TodoIndex.js";
import { connect } from "react-redux";

const msp = (state, ownProps) => ({
  todos: ownProps.todos || todoArrSelector(state),
  editingTodo: editingTodoSelector(state),
});

const mdp = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos()),
  deleteTodo: id => dispatch(deleteTodo(id)),
  setEditingTodo: todo => dispatch(setEditingTodo(todo)),
  setModal: bool => dispatch(setModal(bool)),
});

export default connect(
  msp,
  mdp,
)(TodoIndex);
