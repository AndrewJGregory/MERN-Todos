import React, { Component } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(e) {
    // e is the caught error from below in children
    // this function should return a value to be used as the new state
    return { hasError: true };
  }

  componentDidCatch(err) {
    const { stack, message, name } = err;
    axios.post("/api/emails", {
      errorInfo: { stack, message, name },
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          Something went wrong. Try going back to the{" "}
          <Link to="/">home page.</Link>{" "}
        </h1>
      );
    }

    return this.props.children;
  }
}
