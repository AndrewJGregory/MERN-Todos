import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import Main from "./Main";

export default function App() {
  return (
    <Switch>
      <AuthRoute exact path="/" component={Main} />
    </Switch>
  );
}
