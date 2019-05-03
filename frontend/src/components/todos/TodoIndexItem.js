import "./todo_index_item.css";

import { Button } from "reactstrap";
import PropTypes from "prop-types";
import React from "react";

export default function TodoIndexItem({ todo, user, currentUserId }) {
  const editBtn =
    todo.user === currentUserId ? (
      <Button todoid={todo._id}>Edit</Button>
    ) : null;
  return (
    <li className="todo">
      {user.username} has to {todo.content} {editBtn}
    </li>
  );
}

TodoIndexItem.propTypes = {
  todo: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  currentUserId: PropTypes.string.isRequired,
};
