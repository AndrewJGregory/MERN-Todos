import React, { Fragment } from "react";

import HeaderContainer from "./nav/HeaderContainer";
import TodoIndexContainer from "./todos/TodoIndexContainer";

export default function Main() {
  return (
    <Fragment>
      <HeaderContainer />
      <TodoIndexContainer />
    </Fragment>
  );
}
