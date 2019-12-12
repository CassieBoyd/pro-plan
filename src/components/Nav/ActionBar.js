import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavigationBar.css'
import { Navbar, Nav } from 'react-bootstrap';

class ActionBar extends Component {

  render(){

    return (
      <header>
        <Navbar bg="primary" variant fixed="bottom">
          <Nav className="container">
            {/* <Nav.Link href="/tasks">X</Nav.Link> */}
            <Nav.Link href="/purchases">Add Project</Nav.Link>
            {/* <Nav.Link>Pics</Nav.Link>
            <Nav.Link>Links</Nav.Link>
            <Nav.Link>Supplies</Nav.Link> */}
          </Nav>
        </Navbar>
      </header>
    )
  }
}

export default ActionBar;