import "./session_form.css";
import "../root.css";

import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import React, { useEffect, useState } from "react";

import FooterLinks from "../footer/FooterLinks";
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
  }, [clearErrors]);

  useEffect(() => {
    const validPaths = ["/signin", "/signup"];
    if (!validPaths.includes(history.location.pathname)) {
      history.push("/signin");
    }
  }, [history]);

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
    <>
      <h1>Welcome to the MERN Todos App!</h1>
      <Form className="session-form" onSubmit={handleSubmit}>
        <FormGroup>
          <Label>
            Username
            <Input
              type="text"
              value={username}
              onChange={e => setUsername(e.currentTarget.value)}
              placeholder="Username"
              autoComplete="username"
              required
              disabled={isLoading}
            />
          </Label>
        </FormGroup>
        <p className="error">{errors.username}</p>
        <FormGroup>
          <Label>
            Password
            <Input
              type="password"
              value={password}
              onChange={e => setPassword(e.currentTarget.value)}
              placeholder="Password"
              autoComplete="current-password"
              required
              disabled={isLoading}
            />
          </Label>
        </FormGroup>
        <p className="error">{errors.password}</p>
        <Button disabled={isLoading}>{btnText}</Button>
        <br />
        <Link to={`/${otherUrl}`}>{otherBtnText}</Link>
      </Form>
      <FooterLinks />
    </>
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
