import React, { useEffect } from "react";

import PropTypes from "prop-types";
import TodoIndexContainer from "../todos/TodoIndexContainer";

export default function UserShow({ todos, fetchUserTodos, user }) {
  useEffect(() => {
    fetchUserTodos(user.username);
  }, [fetchUserTodos, user.username]);
  return <TodoIndexContainer todos={todos} />;
}

UserShow.propTypes = {
  todos: PropTypes.array.isRequired,
  fetchUserTodos: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
