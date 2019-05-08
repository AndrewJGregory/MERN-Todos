import {
  currentUserSelector,
  makeTodoUserSelector,
} from "../../util/selectors";

import TodoIndexItem from "./TodoIndexItem";
import { connect } from "react-redux";
import { editTodo } from "../../actions/todo_actions";

const makeMsp = () => (state, { todo }) => ({
  user: makeTodoUserSelector()(state, todo),
  currentUserId: currentUserSelector(state).id,
});

const mdp = dispatch => ({
  editTodo: (id, editedTodo) => dispatch(editTodo(id, editedTodo)),
});

export default connect(
  makeMsp,
  mdp,
)(TodoIndexItem);
