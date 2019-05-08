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
import React, { useState } from "react";

import PropTypes from "prop-types";

export default function EditTodoModal({
  editTodo,
  isModalOpen,
  editingTodo,
  setEditingTodo,
  setModal,
}) {
  const [newContent, setNewContent] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  async function handleEdit() {
    setModal(true);
    setIsEditing(true);
    try {
      const editedTodo = await editTodo(editingTodo._id, {
        ...editingTodo,
        content: newContent,
      });
      setErrMsg("");
      setSuccessMsg("Successfully edited!");
      setEditingTodo(editedTodo);
    } catch ({ response }) {
      setErrMsg(response.data.content);
      setSuccessMsg("");
    }
    setIsEditing(false);
  }

  function handleClose() {
    setSuccessMsg("");
    setErrMsg("");
    setNewContent("");
  }

  return (
    <Modal isOpen={isModalOpen} onClosed={handleClose}>
      <ModalHeader>Edit a todo</ModalHeader>
      <ModalBody>
        Current todo content: {editingTodo.content}
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
  );
}

EditTodoModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  editingTodo: PropTypes.object.isRequired,
  editTodo: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
  setEditingTodo: PropTypes.func.isRequired,
};
