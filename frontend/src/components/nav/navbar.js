import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  logoutUser = e => {
    e.preventDefault();
    this.props.logout();
  };

  links = () => {
    if (this.props.loggedIn) {
      return (
        <header>
          <Link to={"/todos"}>All Todos</Link>
          <Link to={"/profile"}>Profile</Link>
          <Link to={"new_tweet"}>Write a Tweet</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </header>
      );
    } else {
      return (
        <header>
          <Link to={"/signup"}>Sign up</Link>
          <Link to={"/signin"}>Sign in</Link>
        </header>
      );
    }
  };

  render() {
    return (
      <Fragment>
        <h1>The todo app built with MERN</h1>
        {this.links()}
      </Fragment>
    );
  }
}
