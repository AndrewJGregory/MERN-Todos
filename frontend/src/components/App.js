import { AuthRoute, ProtectedRoute } from "../util/route_util";

import Main from "./Main";
import React from "react";
import SessionFormContainer from "./session/SessionFormContainer";
import { Switch } from "react-router-dom";

export default function App() {
  return (
    <Switch>
      <ProtectedRoute path="/todos" component={Main} />
      <AuthRoute path="/signin" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/" component={SessionFormContainer} />
    </Switch>
  );
}
