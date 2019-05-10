import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import configureStore from "./store/store";
import jwt_decode from "jwt-decode";
import { logout } from "./actions/session_actions";
import { setAuthToken } from "./util/session_api_util";

let store;

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const user = jwt_decode(localStorage.jwtToken);
  const preloadedState = {
    session: { isAuthenticated: true, user },
    users: { [user.id]: { username: user.name, _id: user.id } },
  };
  store = configureStore(preloadedState);
  const currentTime = Date.now() / 1000;
  if (user.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/signin";
  }
} else {
  store = configureStore();
}
ReactDOM.render(<Root store={store} />, document.getElementById("root"));
