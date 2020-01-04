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
        <Navbar  variant fixed="sticky">
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
      <Register/>
      </>
      )
  }

  }
}

export default NavigationBar;
