import "../root.css";
import "./todo_index.css";

import React, { useEffect, useState } from "react";

import { Alert } from "reactstrap";
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
  const DELETE_SUCCESS_MSG = "Todo successfully deleted!";

  const [isDeleting, setIsDeleting] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [alertType, setAlertType] = useState("");

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
        deleteTodo(todoId)
          .then(
            () => {
              setAlertContent(DELETE_SUCCESS_MSG);
              setAlertType("success");
            },
            e => {
              setAlertContent(e.response.data.error);
              setAlertType("danger");
            },
          )
          .finally(() => {
            setIsAlertOpen(true);
            setIsDeleting(false);
            setTimeout(() => setIsAlertOpen(false), 2500);
          });
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
    <>
      <Alert color={alertType} isOpen={isAlertOpen}>
        {alertContent}
      </Alert>
      <ul className="todos-list" onClick={handleClick}>
        {todoItems}
      </ul>
    </>
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
