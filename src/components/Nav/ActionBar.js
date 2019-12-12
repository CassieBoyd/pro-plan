import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import { Navbar, Nav, Row, Container, Col, Button } from "react-bootstrap";

class ActionBar extends Component {
  render() {
    return (
      <header>
        <Navbar bg="primary" variant fixed="bottom">
          <Container className="container">
            <Row>
              <Col xs={2}></Col>
              <Col xs={2}>{this.props.cancelItem ? (
                  <Button size="sm" variant="light" onClick={this.props.cancelItem}>Cancel Icon</Button>
                ) : null}</Col>
              <Col xs={2}>{this.props.deleteItem ? (
                  <Button size="sm" variant="light" onClick={this.props.deleteItem}>Delete Icon</Button>
                ) : null}</Col>
              <Col xs={2}>
                {/* <Button size="sm" variant="light" href="/tasks">X</Button> */}
                {this.props.addItem ? (
                  <Button size="sm" variant="light" onClick={this.props.addItem}>Add Icon</Button>
                ) : null}
              </Col>
              <Col xs={2}></Col>
              <Col xs={2}>
                {this.props.saveItem ? (
                  <Button size="sm" variant="light" onClick={this.props.saveItem}>Save Icon</Button>
                ) : null}
              </Col>
              {/* <Button size="sm" variant="light">Pics</Button>
            <Button size="sm" variant="light">Links</Button>
            <Button size="sm" variant="light">Supplies</Button> */}
            </Row>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default ActionBar;
