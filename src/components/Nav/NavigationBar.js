import React, { Component } from "react";
import "./NavigationBar.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"

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
          <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
              <span className="navbar-text">
                  <ul className="nav nav-pills nav-fill">
                      <li className="nav-item">
                          <Link className="nav-link" to="/register">Register</Link>
                      </li>
                  </ul>
              </span>
          </nav>
      )
  }

  }
}

export default NavigationBar;
