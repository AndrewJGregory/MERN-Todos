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
  demoLogin,
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isDemoLoginLoading, setDemoLoginLoading] = useState(false);

  useEffect(() => {
    clearErrors();
  }, [clearErrors]);

  useEffect(() => {
    const validPaths = ["/signin", "/signup"];
    if (!validPaths.includes(history.location.pathname)) {
      history.push("/signin");
    }
  }, [history]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await submit({ username, password });
    } catch {
      setLoading(false);
    }
  }

  async function handleDemoLogin(e) {
    e.preventDefault();
    setDemoLoginLoading(true);
    try {
      await demoLogin();
    } catch {
      setDemoLoginLoading(false);
    }
  }

  const isDisabled = isLoading || isDemoLoginLoading;
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
              disabled={isDisabled}
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
              disabled={isDisabled}
            />
          </Label>
        </FormGroup>
        <p className="error">{errors.password}</p>
        <Button disabled={isDisabled}>{btnText}</Button>
        <br />
        <Button disabled={isDisabled} onClick={handleDemoLogin}>
          Demo Login
        </Button>
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
  demoLogin: PropTypes.func.isRequired,
};
