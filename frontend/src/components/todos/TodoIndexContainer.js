import TodoIndex from "./TodoIndex.js";
import { connect } from "react-redux";
import { fetchTodos } from "../../actions/todo_actions.js";
import { todoArrSelector } from "../../util/selectors.js";

const msp = state => ({ todos: todoArrSelector(state) });
const mdp = dispatch => ({ fetchTodos: () => dispatch(fetchTodos()) });

export default connect(
  msp,
  mdp,
)(TodoIndex);
