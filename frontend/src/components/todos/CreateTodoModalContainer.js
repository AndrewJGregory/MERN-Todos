import {
  currentUserSelector,
  isCreateModalOpenSelector,
} from "../../util/selectors";

import CreateTodoModal from "./CreateTodoModal";
import { connect } from "react-redux";
import { createTodo } from "../../actions/todo_actions";
import { setCreateModal } from "../../actions/ui_actions";

const msp = state => ({
  isCreateModalOpen: isCreateModalOpenSelector(state),
  currentUser: currentUserSelector(state),
});

const mdp = { createTodo, setCreateModal };

export default connect(
  msp,
  mdp,
)(CreateTodoModal);
