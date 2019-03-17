import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import Root from "./components/Root";
import configureStore from "./store/store";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "./util/session_api_util";
import { logout } from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const user = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user } };
    store = configureStore(preloadedState);
    const currentTime = Date.now() / 1000;
    if (user.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = "/login";
    }
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
});
