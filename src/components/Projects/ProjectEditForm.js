import React, { Component } from "react";
import ProjectManager from "../modules/ProjectManager";
import ActionBar from "../Nav/ActionBar";
import { Form } from "react-bootstrap";
// import "./ProjectForm.css"

class ProjectEditForm extends Component {
  //set the initial state
  state = {
    projectName: "",
    dueDate: "",
    startDate: "",
    userId: "",
    loadingStatus: true
  };

  saveItem = () => {
    this.updateExistingProject();
    console.log("saving project stuff");
  };
  cancelItem = () => {
    this.props.history.push(`/projects/${this.props.match.params.projectId}`);
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingProject = () => {
    this.setState({ loadingStatus: true });
    const editedProject = {
      id: this.props.match.params.projectId,
      name: this.state.projectName,
      dueDate: this.state.dueDate,
      startDate: this.state.startDate,
      userId: this.state.userId,
      complete: false
    };

    ProjectManager.update(editedProject).then(() =>
      this.props.history.push(`/projects/${this.props.match.params.projectId}`)
    );
  };

  componentDidMount() {
    ProjectManager.get(this.props.match.params.projectId).then(project => {
      this.setState({
        projectName: project.name,
        dueDate: project.dueDate,
        startDate: project.startDate,
        userId: Number(localStorage["userId"]),
        complete: project.complete,
        loadingStatus: false
      });
    });
  }

  render() {
    return (
      <>
        <Form>
          <Form.Group>
            <Form.Label>Project Name:</Form.Label>
            <Form.Control
              type="text"
              required
              className="name"
              onChange={this.handleFieldChange}
              id="projectName"
              value={this.state.projectName}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Due Date:</Form.Label>
            <Form.Control
              type="date"
              required
              className="date"
              onChange={this.handleFieldChange}
              id="dueDate"
              value={this.state.dueDate}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Start Date:</Form.Label>
            <Form.Control
              type="date"
              required
              className="date"
              onChange={this.handleFieldChange}
              id="startDate"
              value={this.state.startDate}
            />
          </Form.Group>
        </Form>
        <ActionBar saveItem={this.saveItem} cancelItem={this.cancelItem} />
      </>
    );
  }
}

export default ProjectEditForm;
