import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { signin, signup } from "../../actions/session_actions";
import SessionForm from "./SessionForm";

const mapStateToProps = ({ errors: { session } }, ownProps) => {
  const btnText = ownProps.location.pathname.includes("/signin")
    ? "Sign in"
    : "Sign up";
  const otherText = btnText === "Sign in" ? "signup" : "signin";
  return { errors: session, btnText, otherText };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const submit = ownProps.location.pathname.includes("/signin")
    ? signin
    : signup;
  return {
    submit: user => dispatch(submit(user)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SessionForm),
);
