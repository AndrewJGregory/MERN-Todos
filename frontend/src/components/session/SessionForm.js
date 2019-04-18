import React, { useEffect, useState } from "react";

import { Form } from "reactstrap";
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
    //     <Form>
    //   <Form.Group controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type="email" placeholder="Enter email" />
    //     <Form.Text className="text-muted">
    //       We'll never share your email with anyone else.
    //     </Form.Text>
    //   </Form.Group>

    //   <Form.Group controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password" />
    //   </Form.Group>
    //   <Form.Group controlId="formBasicChecbox">
    //     <Form.Check type="checkbox" label="Check me out" />
    //   </Form.Group>
    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </Form>;
    <Form onSubmit={handleSubmit}>
      <h1>Welcome to the MERN Todos App!</h1>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.currentTarget.value)}
        placeholder="Username"
        autoComplete="username"
        required
        disabled={isLoading}
      />
      <p>{errors.username}</p>
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
      <p>{errors.password}</p>
      <button disabled={isLoading}>{btnText}</button>
      <Link to={`/${otherUrl}`}>{otherBtnText}</Link>
    </Form>
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
