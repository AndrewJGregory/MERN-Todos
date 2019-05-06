import React, { Fragment } from "react";

import EditTodoModalContainer from "./todos/EditTodoModalContainer";
import HeaderContainer from "./nav/HeaderContainer";
import TodoIndexContainer from "./todos/TodoIndexContainer";

export default function Main() {
  return (
    <Fragment>
      <EditTodoModalContainer />
      <HeaderContainer />
      <TodoIndexContainer />
    </Fragment>
  );
}
