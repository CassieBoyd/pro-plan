import React, { Component } from "react";
import TaskManager from "../modules/TaskManager";
import ActionBar from "../Nav/ActionBar";
import OptionBar from "../Nav/OptionBar";
import { Form } from "react-bootstrap";
// import "./TaskEditForm.css"

class TaskEditForm extends Component {
  //set the initial state
  state = {
    taskName: "",
    taskNote: "",
    complete: "",
    loadingStatus: true
  };

  saveItem = () => {
    this.updateExistingTask();
    console.log("saving task stuff");
  };
  cancelItem = () => {
    this.props.history.push(`/projects/${this.props.projectId}/tasks/${this.props.taskId}`);
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingTask = () => {
    this.setState({ loadingStatus: true });
    const editedTask = {
      id: this.props.match.params.taskId,
      taskName: this.state.taskName,
      taskNote: this.state.taskNote,
      complete: this.state.complete,
      projectId: this.props.projectId
    };

    TaskManager.update(editedTask).then(() =>
      this.props.history.push(`/projects/${this.props.projectId}/tasks/${this.props.taskId}`)
    );
  };

  componentDidMount() {
    TaskManager.get(this.props.match.params.taskId).then(task => {
      this.setState({
        taskName: task.taskName,
        taskNote: task.taskNote,
        complete: task.complete,
        loadingStatus: false
      });
    });
  }

  render() {
    return (
      <>
            <OptionBar
              taskId={this.props.taskId}
              projectId={this.props.projectId}
            />
        <Form>
          <Form.Group>

            <Form.Label>Task:</Form.Label>
            <Form.Control
              type="text"
              required
              className="name"
              onChange={this.handleFieldChange}
              id="taskName"
              value={this.state.taskName}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Note:</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              required
              className="note"
              onChange={this.handleFieldChange}
              id="taskNote"
              value={this.state.taskNote}
            />
          </Form.Group>
        </Form>
        <ActionBar saveItem={this.saveItem} cancelItem={this.cancelItem} />
      </>
    );
  }
}

export default TaskEditForm;
