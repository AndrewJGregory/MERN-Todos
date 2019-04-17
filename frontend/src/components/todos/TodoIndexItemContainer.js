import TodoIndexItem from "./TodoIndexItem";
import { connect } from "react-redux";
import { makeTodoUserSelector } from "../../util/selectors";

const makeMsp = () => (state, { todo }) => ({
  user: makeTodoUserSelector()(state, todo),
});

export default connect(
  makeMsp,
  null,
)(TodoIndexItem);
