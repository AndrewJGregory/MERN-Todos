import PropTypes from "prop-types";
import React from "react";
import TodoIndexContainer from "../todos/TodoIndexContainer";

export default function UserShow({ todos }) {
  return <TodoIndexContainer todos={todos} />;
}

UserShow.propTypes = {
  todos: PropTypes.array.isRequired,
};
