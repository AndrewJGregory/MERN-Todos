import "./root.css";

import App from "./App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
export default function Root({ store }) {
  return (
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  );
}
