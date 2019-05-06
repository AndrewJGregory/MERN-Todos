import "../root.css";
import "./todo_index.css";

import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import TodoIndexItemContainer from "./TodoIndexItemContainer";

export default function TodoIndex({
  todos,
  fetchTodos,
  deleteTodo,
  setEditingTodo,
  setModal,
  editingTodo,
}) {
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  async function handleClick(e) {
    const todoId = e.target.getAttribute("todoid");
    if (todoId) {
      setEditingTodo(todos.find(todo => todo._id === todoId));
      if (e.target.innerText === "Edit") {
        setModal(true);
      } else {
        setIsDeleting(true);
        await deleteTodo(todoId);
        setIsDeleting(false);
      }
    }
  }

  const todoItems = todos.map(todo => (
    <TodoIndexItemContainer
      todo={todo}
      key={todo._id}
      isDeleting={editingTodo._id === todo._id && isDeleting}
    />
  ));

  return (
    <ul className="todos-list" onClick={handleClick}>
      {todoItems}
    </ul>
  );
}

TodoIndex.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchTodos: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editingTodo: PropTypes.object.isRequired,
  setEditingTodo: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
};
