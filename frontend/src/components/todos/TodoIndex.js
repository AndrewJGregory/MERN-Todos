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
  const [isLoading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  function handleClick(e) {
    const todoId = e.target.getAttribute("todoid");
    if (todoId) {
      setSelectedTodo(todos.find(todo => todo._id === todoId));
      if (e.target.innerText === "Edit") {
        setModal(true);
      } else {
        deleteTodo(todoId);
      }
    }
  }

  async function handleEdit(e) {
    setLoading(true);
    try {
      const editedTodo = await editTodo(selectedTodo._id, newContent);
      setLoading(false);
      setErrMsg("");
      setSuccessMsg("Successfully edited!");
      setSelectedTodo(editedTodo);
    } catch ({ response }) {
      setLoading(false);
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
    <TodoIndexItemContainer todo={todo} key={todo._id} />
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
                  disabled={isLoading}
                />
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <p className="error">{errMsg}</p>
          <p className="success">{successMsg}</p>
          <br />
          <Button color="primary" onClick={handleEdit} disabled={isLoading}>
            Edit
          </Button>
          <Button
            color="secondary"
            onClick={() => setModal(false)}
            disabled={isLoading}
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
