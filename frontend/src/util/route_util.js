import { Redirect, Route, withRouter } from "react-router-dom";

import React from "react";
import { connect } from "react-redux";

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      loggedIn ? <Redirect to="/todos" /> : <Component {...props} />
    }
  />
);

const Protected = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedIn ? <Component {...props} /> : <Redirect to="/signin" />
    }
  />
);

const mapStateToProps = ({ session: { user } }) => ({
  loggedIn: Boolean(user),
});
//   ({
//   loggedIn: isAuthenticated,
// });

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
