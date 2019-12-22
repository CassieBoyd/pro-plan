import React, { Component } from "react";
import TaskManager from "../modules/TaskManager";
import ActionBar from "../Nav/ActionBar";
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

  /*  Local method for validation, set loadingStatus, create Task      object, invoke the TaskManager post method, and redirect to the full Task list
   */
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

      // Create the Task and redirect user to Task list
      TaskManager.post(task).then(() =>
        this.props.history.push(`/projects/${this.props.projectId}/tasks`)
      );
    }
  };

  render() {
    return (
      <>
        <h3 className="title">Add A Task</h3>
        <form>
          <fieldset>
            <div className="formgrid">
              <label htmlFor="taskName">Task: </label>
              <input className="name"
                type="text"
                required
                onChange={this.handleFieldChange}
                id="taskName"
              />
              <br></br>

              <label htmlFor="taskNote">Note:</label>
              <input className="note"
                type="text"
                onChange={this.handleFieldChange}
                id="taskNote"
              />
            </div>
          </fieldset>
        </form>
        <ActionBar saveItem={this.saveItem} cancelItem={this.cancelItem} />
      </>
    );
  }
}

export default TaskForm;
