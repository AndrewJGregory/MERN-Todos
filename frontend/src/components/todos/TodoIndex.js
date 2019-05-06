import "../root.css";

import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import TodoIndexItemContainer from "./TodoIndexItemContainer";

export default function TodoIndex({ todos, fetchTodos, editTodo, deleteTodo }) {
  const [isModalOpen, setModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState({ content: "", id: null });
  const [newContent, setNewContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  async function handleClick(e) {
    const todoId = e.target.getAttribute("todoid");
    if (todoId) {
      setSelectedTodo(todos.find(todo => todo._id === todoId));
      if (e.target.innerText === "Edit") {
        setModal(true);
      } else {
        setIsDeleting(true);
        await deleteTodo(todoId);
        setIsDeleting(false);
      }
    }
  }

  async function handleEdit(e) {
    setIsEditing(true);
    try {
      const editedTodo = await editTodo(selectedTodo._id, newContent);
      setIsEditing(false);
      setErrMsg("");
      setSuccessMsg("Successfully edited!");
      setSelectedTodo(editedTodo);
    } catch ({ response }) {
      setIsEditing(false);
      setErrMsg(response.data.content);
      setSuccessMsg("");
    }
  }

  function handleClose() {
    setSuccessMsg("");
    setErrMsg("");
    setNewContent("");
  }

  const todoItems = todos.map(todo => (
    <TodoIndexItemContainer
      todo={todo}
      key={todo._id}
      isDeleting={selectedTodo._id === todo._id && isDeleting}
    />
  ));

  return (
    <>
      <Modal isOpen={isModalOpen} onClosed={handleClose}>
        <ModalHeader>Edit a todo</ModalHeader>
        <ModalBody>
          Current todo content: {selectedTodo.content}
          <Form>
            <FormGroup>
              <Label>
                New Content
                <Input
                  type="text"
                  value={newContent}
                  onChange={e => setNewContent(e.currentTarget.value)}
                  required
                  disabled={isEditing}
                />
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <p className="error">{errMsg}</p>
          <p className="success">{successMsg}</p>
          <br />
          <Button color="primary" onClick={handleEdit} disabled={isEditing}>
            Edit
          </Button>
          <Button
            color="secondary"
            onClick={() => setModal(false)}
            disabled={isEditing}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <ul onClick={handleClick}>{todoItems}</ul>
    </>
  );
}

TodoIndex.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchTodos: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
