import "./session_form.css";

import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function SessionForm({
  submit,
  history,
  btnText,
  otherBtnText,
  otherUrl,
  errors,
  clearErrors,
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    clearErrors();
  }, [history.location.pathname]);

  useEffect(() => {
    const validPaths = ["/signin", "/signup"];
    if (!validPaths.includes(history.location.pathname)) {
      history.push("/signin");
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    submit({ username, password }).then(res => {
      if (res === "fail") {
        setLoading(false);
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.currentTarget.value)}
        placeholder="Username"
        autoComplete="username"
        required
        disabled={isLoading}
      />
      {errors.username}
      <br />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.currentTarget.value)}
        placeholder="Password"
        autoComplete="current-password"
        required
        disabled={isLoading}
      />
      {errors.password}
      <Link to={`/${otherUrl}`}>{otherBtnText}</Link>
    </form>
  );
}

SessionForm.propTypes = {
  submit: PropTypes.func.isRequired,
  otherUrl: PropTypes.string.isRequired,
  otherBtnText: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  clearErrors: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
