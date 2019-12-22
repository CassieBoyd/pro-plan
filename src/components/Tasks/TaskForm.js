import React, { Component } from "react";
import TaskManager from "../modules/TaskManager";
import ActionBar from "../Nav/ActionBar";
import { Form } from "react-bootstrap";
// import './TaskForm.css'

class TaskForm extends Component {
  state = {
    taskName: "",
    taskNote: "",
    complete: false,
    loadingStatus: false
  };
  //   Function that calls constructNewTask method on props passed into it.
  saveItem = () => {
    this.constructNewTask();
    console.log("saving task");
  };
  cancelItem = () => {
    this.props.history.push(`/projects/${this.props.projectId}/tasks`);
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };
// Checks to see if there's anything in the taskName affordance. If not, the user gets an alert asking them to input a task. If they did input a task, loadingStatus is set to true in state and the values are grabbed and put into task object.
  constructNewTask = () => {
    if (this.state.taskName === "") {
      window.alert("Please input a Task");
    } else {
      this.setState({ loadingStatus: true });
      const task = {
        taskName: this.state.taskName.replace(/(\"|\')/g, "$1"),
        taskNote: this.state.taskNote.replace(/(\"|\')/g, "$1"),
        complete: this.state.complete,
        projectId: this.props.projectId
      };

      // Create the task using the post method in TaskManager and redirect user to Task list
      TaskManager.post(task).then(() =>
        this.props.history.push(`/projects/${this.props.projectId}/tasks`)
      );
    }
  };

  render() {
    return (
      <>
        <h3 className="title">Add A Task</h3>
        <Form>
          <Form.Group>
            <Form.Label>Task:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Task"
              className="name"
              required
              onChange={this.handleFieldChange}
              id="taskName"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Note:</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Task Notes"
              className="note"
              onChange={this.handleFieldChange}
              id="taskNote"
            />
          </Form.Group>
        </Form>
        <ActionBar saveItem={this.saveItem} cancelItem={this.cancelItem} />
      </>
    );
  }
}

export default TaskForm;
