import React, { Component } from "react";
import "./NavigationBar.css";
import { Navbar, Nav} from "react-bootstrap";
import { FiPackage, FiLink, FiImage, FiShoppingCart, FiList } from "react-icons/fi"

class OptionBar extends Component {
  render() {
    return (
        <header className="optionBar">
        <Navbar bg="secondary" variant fixed="sticky">
          <Nav className="container">
            
            <Nav.Link href={`/projects/${this.props.projectId}/tasks`}><FiList className="icon" size="30px" /></Nav.Link>

           <Nav.Link href={`/projects/${this.props.projectId}/purchases`}> <FiShoppingCart className="icon" size="30px" /></Nav.Link>

            <Nav.Link href="/"><FiImage className="icon" size="30px" /></Nav.Link>

            <Nav.Link href={`/projects/${this.props.projectId}/references`}><FiLink className="icon" size="30px" /></Nav.Link>

            <Nav.Link href={`/projects/${this.props.projectId}/supplies`}><FiPackage className="icon" size="30px" /></Nav.Link>
          </Nav>
        </Navbar>
      </header>
    );
  }
}

export default OptionBar;