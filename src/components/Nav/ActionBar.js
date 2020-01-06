import React, { Component } from "react";
import "./ActionBar.css";
import { Navbar, Row, Container, div } from "react-bootstrap";
import { FiPlus, FiTrash, FiCheck, FiEdit, FiX, FiSave } from "react-icons/fi";

class ActionBar extends Component {
  render() {
    return (
      <header>
        <Navbar
        className="nav-bar"
          style={{
            display: "flex",
            justifyContent: "space-around"
          }}
          bg="secondary"
          variant
          fixed="bottom">
          {/* <Container className="container"> */}

          {/* ADD AND COMPLETE */}

          {this.props.completeItem ? (
            <FiCheck
              className="icon"
              size="40px"
              onClick={this.props.completeItem}
            />
          ) : null}
          {this.props.addItem ? (
            <FiPlus size="40px" className="icon" onClick={this.props.addItem} />
          ) : null}

          {/* CANCEL AND DELETE */}
          {this.props.cancelItem ? (
            <FiX size="40px" className="icon" onClick={this.props.cancelItem} />
          ) : null}
          {this.props.deleteItem ? (
            <FiTrash
              size="40px"
              className="icon"
              onClick={this.props.deleteItem}
            />
          ) : null}

          {/* SAVE AND EDIT */}
          {this.props.saveItem ? (
            <FiSave
              size="40px"
              className="icon"
              onClick={this.props.saveItem}
            />
          ) : null}
          {this.props.editItem ? (
            <FiEdit
              className="icon"
              size="40px"
              onClick={this.props.editItem}
            />
          ) : null}

          {/* </Container> */}
        </Navbar>
      </header>
    );
  }
}

export default ActionBar;
