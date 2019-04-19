import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

const mdp = dispatch => ({ logout: () => dispatch(logout()) });

export default connect(
  null,
  mdp,
)(Header);
