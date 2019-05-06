import "./todo_index_item.css";

import { Button } from "reactstrap";
import PropTypes from "prop-types";
import React from "react";

export default function TodoIndexItem({ todo, user, currentUserId }) {
  let editBtn = null;
  let deleteBtn = null;
  if (todo.user === currentUserId) {
    editBtn = <Button todoid={todo._id}>Edit</Button>;
    deleteBtn = <Button todoid={todo._id}>Delete</Button>;
  }
  return (
    <li className="todo">
      {user.username} has to {todo.content} {editBtn} {deleteBtn}
    </li>
  );
}

TodoIndexItem.propTypes = {
  todo: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  currentUserId: PropTypes.string.isRequired,
};
