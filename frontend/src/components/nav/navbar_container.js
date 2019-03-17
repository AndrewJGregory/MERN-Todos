import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import NavBar from "./navbar";

const mapStateToProps = ({ session: { isAuthenticated } }) => ({
  loggedIn: isAuthenticated,
});

export default connect(
  mapStateToProps,
  { logout },
)(NavBar);
