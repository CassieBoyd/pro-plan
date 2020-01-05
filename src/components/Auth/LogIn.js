import React, { Component } from "react";
import UserManager from "../modules/UserManager";
import { Row, Form, Button } from "react-bootstrap";
class LogIn extends Component {
  // Set initial state
  state = {
    username: "",
    email: "",
    password: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  handleLogin = event => {
    event.preventDefault();

    UserManager.searchUser(this.state.email).then(existingUser => {
      if (existingUser.length === 0) {
        alert("User does not have an account");
      } else {
        const user = existingUser[0];
        if (user.password === this.state.password) {
          this.props.setUser(user);
          this.props.history.push("/");
        } else {
          alert("Incorrect Password, Try Again.");
        }
      }
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleLogin}>
        
            <Form.Label>Email:</Form.Label>
            <Form.Control
              onChange={this.handleFieldChange}
              type="email"
              id="email"
              className="login"
              placeholder="Email address"
              required=""
              autoFocus=""
            />
<Form.Label>Password:</Form.Label>
            <Form.Control
              onChange={this.handleFieldChange}
              type="password"
              className="login"
              id="password"
              placeholder="Password"
              required=""
            />
          <center><Button 
          type="submit"
          id="login-button"
          variant="secondary"
          >Log In</Button></center>
      </Form>
    );
  }
}

export default LogIn;
