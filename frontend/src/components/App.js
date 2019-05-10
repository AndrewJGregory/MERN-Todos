import { AuthRoute, ProtectedRoute } from "../util/route_util";

import EditTodoModalContainer from "./todos/EditTodoModalContainer";
import ErrorBoundary from "./ErrorBoundary";
import HeaderContainer from "./nav/HeaderContainer";
import React from "react";
import SessionFormContainer from "./session/SessionFormContainer";
import { Switch } from "react-router-dom";
import TodoIndexContainer from "./todos/TodoIndexContainer";
import UserShowContainer from "./users/UserShowContainer";
import { connect } from "react-redux";
import { currentUserSelector } from "../util/selectors";

function App({ isLoggedIn }) {
  return (
    <ErrorBoundary>
      <>
        {isLoggedIn && <HeaderContainer />}
        <EditTodoModalContainer />
        <Switch>
          <ProtectedRoute
            path="/users/:username"
            component={UserShowContainer}
          />
          <ProtectedRoute path="/todos" component={TodoIndexContainer} />
          <AuthRoute path="/signin" component={SessionFormContainer} />
          <AuthRoute path="/signup" component={SessionFormContainer} />
          <AuthRoute path="/" component={SessionFormContainer} />
        </Switch>
      </>
    </ErrorBoundary>
  );
}

const msp = state => ({ isLoggedIn: Boolean(currentUserSelector(state)) });

export default connect(msp)(App);
