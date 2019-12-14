import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import { Navbar, Nav, Row, Container, Col, Button } from "react-bootstrap";

class OptionBar extends Component {
  render() {
    return (
        <header>
        <Navbar bg="primary" variant fixed="sticky">
          <Nav className="container">
            <Nav.Link href={`/projects/${this.props.projectId}/tasks`}>Tasks</Nav.Link>
            <Nav.Link href={`/projects/${this.props.projectId}/purchases`}>Shop</Nav.Link>
            <Nav.Link href="/">Pics</Nav.Link>
            <Nav.Link href="/">Refs</Nav.Link>
            <Nav.Link href="/">Supplies</Nav.Link>
          </Nav>
        </Navbar>
      </header>
    );
  }
}

export default OptionBar;