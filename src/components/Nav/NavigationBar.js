import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class NavigationBar extends Component {
  render() {
    return (
      <header>
        <Navbar bg="primary" variant fixed="sticky">
          <Nav className="container">
            <Nav.Link href="/">Logo</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/tasks">Tasks</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Shop
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
      </header>
    );
  }
}

export default NavigationBar;
