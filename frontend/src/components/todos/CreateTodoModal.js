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

export default function CreateTodoModal({
  createTodo,
  setCreateModal,
  isCreateModalOpen,
  currentUser,
}) {
  const [newContent, setNewContent] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  async function handleCreate(e) {
    e.preventDefault();
    setCreateModal(true);
    setIsCreating(true);
    try {
      // why not get currentUser from getState() in the thunk action?
      await createTodo({ content: newContent, user: currentUser });
      setErrMsg("");
      setSuccessMsg("Successfully created!");
    } catch ({ response }) {
      setErrMsg(response.data.content);
      setSuccessMsg("");
    }
    setIsCreating(false);
  }

  function handleClose() {
    setSuccessMsg("");
    setErrMsg("");
    setNewContent("");
  }

  return (
    <Modal isOpen={isCreateModalOpen} onClosed={handleClose}>
      <ModalHeader>Edit a todo</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label>
              New Content
              <Input
                type="text"
                value={newContent}
                onChange={e => setNewContent(e.currentTarget.value)}
                required
                disabled={isCreating}
              />
            </Label>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <p className="error">{errMsg}</p>
        <p className="success">{successMsg}</p>
        <br />
        <Button color="primary" onClick={handleCreate} disabled={isCreating}>
          Create
        </Button>
        <Button
          color="secondary"
          onClick={() => setCreateModal(false)}
          disabled={isCreating}
        >
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

CreateTodoModal.propTypes = {
  createTodo: PropTypes.func.isRequired,
  setCreateModal: PropTypes.func.isRequired,
  isCreateModalOpen: PropTypes.bool.isRequired,
  currentUser: PropTypes.object.isRequired,
};
