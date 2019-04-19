import { Button, Navbar, NavbarBrand } from "reactstrap";

import PropTypes from "prop-types";
import React from "react";

export default function Header({ logout }) {
  return (
    <Navbar>
      <NavbarBrand href="/">The todo app built with MERN</NavbarBrand>
      <Button onClick={logout}>Logout</Button>
    </Navbar>
  );
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
};
