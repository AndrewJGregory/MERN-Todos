import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { setCreateModal } from "../../actions/ui_actions";

const mdp = { logout, setCreateModal };

export default connect(
  null,
  mdp,
)(Header);
