import React, { Component } from "react";
import "./NavigationBar.css";
import { Navbar, Nav } from "react-bootstrap";

class NavigationBar extends Component {
  render() {
    return (
      <header>
        <Navbar bg="primary" variant fixed="sticky">
          <Nav className="container">
            <Nav.Link href="/">Logo</Nav.Link>
            <Nav.Link href="/LogIn">Log In</Nav.Link>

          </Nav>
        </Navbar>
      </header>
    );
  }
}

export default NavigationBar;
