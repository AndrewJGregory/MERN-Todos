import {
  currentUserSelector,
  makeTodoUserSelector,
} from "../../util/selectors";

import TodoIndexItem from "./TodoIndexItem";
import { connect } from "react-redux";

const makeMsp = () => (state, { todo }) => ({
  user: makeTodoUserSelector()(state, todo),
  currentUserId: currentUserSelector(state).id,
});

export default connect(
  makeMsp,
  null,
)(TodoIndexItem);
