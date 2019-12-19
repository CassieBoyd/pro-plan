import React, { Component } from "react";
import "./ActionBar.css";
import { Navbar, Row, Container, Col } from "react-bootstrap";
import { FiPlus, FiTrash, FiCheck, FiEdit, FiX, FiSave } from "react-icons/fi"

class ActionBar extends Component {
  render() {
    return (
      <header>
        <Navbar bg="primary" variant fixed="bottom">
          <Container className="container">
            <Row>
              <Col xs={2}>{this.props.completeItem ? (
                  <FiCheck className="icon" size="40px" onClick={this.props.completeItem}/>
                ) : null}</Col>

              <Col xs={2}>{this.props.cancelItem ? (
                  <FiX size="40px" className="icon" onClick={this.props.cancelItem}/>
                ) : null}</Col>

              <Col xs={2}>{this.props.deleteItem ? (
                  <FiTrash size="40px" className="icon" onClick={this.props.deleteItem}/>
                ) : null}</Col>

              <Col xs={2}>
                {this.props.addItem ? (
                  <FiPlus size="40px" className="icon" onClick={this.props.addItem}/>
                ) : null}
              </Col>

              <Col xs={2}>{this.props.editItem ? (
                  <FiEdit className="icon" size="40px" onClick={this.props.editItem}/>
                ) : null}</Col>

              <Col xs={2}>
                {this.props.saveItem ? (
                  <FiSave size="40px" className="icon" onClick={this.props.saveItem}/>
                ) : null}
              </Col>
            </Row>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default ActionBar;
