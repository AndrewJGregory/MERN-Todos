import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function SessionForm({ submit, btnText, history, otherText }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    submit({ username, password }).then(() => history.push("/todos"));
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.currentTarget.value)}
        placeholder="Username"
        autoComplete="username"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.currentTarget.value)}
        placeholder="Password"
        autoComplete="current-password"
      />
      <button>{btnText}</button>
      <Link to={`/${otherText}`}>{otherText}</Link>
    </form>
  );
}

SessionForm.propTypes = {
  submit: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
  otherText: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};
