import { editingTodoSelector, isModalOpenSelector } from "../../util/selectors";
import { setEditingTodo, setModal } from "../../actions/ui_actions";

import EditTodoModal from "./EditTodoModal";
import { connect } from "react-redux";
import { editTodo } from "../../actions/todo_actions.js";

const msp = state => ({
  editingTodo: editingTodoSelector(state),
  isModalOpen: isModalOpenSelector(state),
});

const mdp = dispatch => ({
  editTodo: (id, content) => dispatch(editTodo(id, content)),
  setEditingTodo: todo => dispatch(setEditingTodo(todo)),
  setModal: bool => dispatch(setModal(bool)),
});

export default connect(
  msp,
  mdp,
)(EditTodoModal);
