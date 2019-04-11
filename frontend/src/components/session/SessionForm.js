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
    <form className="session-form" onSubmit={handleSubmit}>
      <h1 className="session-form__header">Welcome to the MERN Todos App!</h1>
      <input
        className="session-form__input"
        type="text"
        value={username}
        onChange={e => setUsername(e.currentTarget.value)}
        placeholder="Username"
        autoComplete="username"
        required
        disabled={isLoading}
      />
      <p className="session-form__error">{errors.username}</p>
      <br />
      <input
        className="session-form__input"
        type="password"
        value={password}
        onChange={e => setPassword(e.currentTarget.value)}
        placeholder="Password"
        autoComplete="current-password"
        required
        disabled={isLoading}
      />
      <p className="session-form__error">{errors.password}</p>
      <button className="session-form__btn" disabled={isLoading}>
        {btnText}
      </button>
      <Link className="session-form__link" to={`/${otherUrl}`}>
        {otherBtnText}
      </Link>
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
