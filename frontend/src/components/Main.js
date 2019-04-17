import React, { Fragment } from "react";

import NavbarContainer from "./nav/NavbarContainer";
import TodoIndexContainer from "./todos/TodoIndexContainer";

export default function Main() {
  return (
    <Fragment>
      <NavbarContainer />
      <TodoIndexContainer />
    </Fragment>
  );
}
