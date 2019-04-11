import { receiveErrors, signin, signup } from "../../actions/session_actions";

import SessionForm from "./SessionForm";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = ({ errors: { session } }, ownProps) => {
  const btnText = ownProps.location.pathname.includes("/signup")
    ? "Sign up"
    : "Sign in";
  let otherBtnText, otherUrl;
  if (btnText === "Sign in") {
    otherBtnText = "Don't have an account? Sign Up";
    otherUrl = "signup";
  } else {
    otherBtnText = "Already have an account? Sign In";
    otherUrl = "signin";
  }
  return { errors: session, otherBtnText, otherUrl, btnText };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const submit = ownProps.location.pathname.includes("/signin")
    ? signin
    : signup;
  return {
    submit: user => dispatch(submit(user)),
    clearErrors: () => dispatch(receiveErrors({})),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SessionForm),
);
