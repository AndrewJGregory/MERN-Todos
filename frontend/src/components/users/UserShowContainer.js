import { getUserByUsername, getUserTodos } from "../../util/selectors";

import UserShow from "./UserShow";
import { connect } from "react-redux";
import { fetchUserTodos } from "../../actions/user_actions";
import { withRouter } from "react-router-dom";

const msp = (state, ownProps) => {
  const { username } = ownProps.match.params;
  const user = getUserByUsername(state, username) || { username };
  return {
    todos: getUserTodos(state, user._id),
    user,
  };
};

const mdp = dispatch => ({
  fetchUserTodos: userId => dispatch(fetchUserTodos(userId)),
});

export default withRouter(
  connect(
    msp,
    mdp,
  )(UserShow),
);
