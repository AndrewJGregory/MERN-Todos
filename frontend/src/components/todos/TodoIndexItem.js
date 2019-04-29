import { Button } from "reactstrap";
import PropTypes from "prop-types";
import React from "react";

export default function TodoIndexItem({ todo, user }) {
  return (
    <li>
      {user.username} has to {todo.content}{" "}
      <Button todoid={todo._id}>Edit</Button>
    </li>
  );
}

TodoIndexItem.propTypes = {
  todo: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};
