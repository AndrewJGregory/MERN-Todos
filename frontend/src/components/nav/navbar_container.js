import NavBar from "./navbar";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

const mapStateToProps = ({ session: { user } }) => ({
  loggedIn: Boolean(user),
});

export default connect(
  mapStateToProps,
  { logout },
)(NavBar);
