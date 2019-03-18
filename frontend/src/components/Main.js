import React, { Fragment } from "react";
import NavBarContainer from "./nav/navbar_container";

export default function Main() {
  return (
    <Fragment>
      <NavBarContainer />
      <h1>Todos</h1>
    </Fragment>
  );
}
