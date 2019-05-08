import UserShow from "./UserShow";
import { connect } from "react-redux";
import { getUserTodos } from "../../util/selectors";
import { withRouter } from "react-router-dom";

const msp = (state, ownProps) => ({
  todos: getUserTodos(state, ownProps.match.params.id),
});

export default withRouter(connect(msp)(UserShow));
