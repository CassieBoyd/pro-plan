import React, { Component } from "react";
import "./NavigationBar.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
import Register from "../Auth/Register";

class NavigationBar extends Component {
  render() {
    if (this.props.user === true)
    return (
      <header>
        <Navbar bg="primary" variant fixed="sticky">
          <Nav className="container">
            <Nav.Link href="/">Logo</Nav.Link>
            <Nav.Link href="/LogIn" onClick={this.props.clearUser}>Log Out</Nav.Link>

          </Nav>
        </Navbar>
      </header>
    );
    else {
      return (
        <>
        {/* <header>
        <Navbar bg="primary" variant fixed="sticky">
          <Nav className="container">
            <Nav.Link href="/">Logo</Nav.Link>
            <Nav.Link href="/LogIn">Log In</Nav.Link>

          </Nav>
        </Navbar>
      </header> */}
      <Register/>
      </>
      )
  }

  }
}

export default NavigationBar;
