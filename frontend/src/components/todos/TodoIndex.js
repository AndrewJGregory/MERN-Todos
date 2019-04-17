import React, { useEffect } from "react";

import PropTypes from "prop-types";
import TodoIndexItemContainer from "./TodoIndexItemContainer";

export default function TodoIndex({ todos, fetchTodos }) {
  useEffect(() => {
    fetchTodos();
  }, []);

  const todoItems = todos.map(todo => (
    <TodoIndexItemContainer todo={todo} key={todo._id} />
  ));
  return <ul>{todoItems}</ul>;
}

TodoIndex.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchTodos: PropTypes.func.isRequired,
};
