import { deleteTodo, fetchTodos } from "../../actions/todo_actions.js";
import { editingTodoSelector, todoArrSelector } from "../../util/selectors.js";
import { setEditingTodo, setModal } from "../../actions/ui_actions";

import TodoIndex from "./TodoIndex.js";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const msp = (state, ownProps) => ({
  todos: ownProps.todos || todoArrSelector(state),
  editingTodo: editingTodoSelector(state),
  url: ownProps.match.url,
});

const mdp = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos()),
  deleteTodo: id => dispatch(deleteTodo(id)),
  setEditingTodo: todo => dispatch(setEditingTodo(todo)),
  setModal: bool => dispatch(setModal(bool)),
});

export default withRouter(
  connect(
    msp,
    mdp,
  )(TodoIndex),
);
