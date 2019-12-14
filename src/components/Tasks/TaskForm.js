import React, { Component } from "react";
import TaskManager from "../modules/TaskManager";
import ActionBar from "../Nav/ActionBar";
// import './TaskForm.css'

class TaskForm extends Component {
  state = {
    TaskName: "",
    taskNotes: "",
    complete: "",
    projectId: Number(localStorage["projectId"]),
    loadingStatus: false
  };
//   Function that calls constructNewTask method on props passed into it.
  saveItem = () => {
    this.constructNewTask()
    console.log("saving task");
  };
  cancelItem = () => {
    this.props.history.push("/tasks");
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create Task      object, invoke the TaskManager post method, and redirect to the full Task list
   */
  constructNewTask = () => {
    if (this.state.TaskName === "") {
      window.alert("Please input a Task Name");
    } else {
      this.setState({ loadingStatus: true });
      const Task = {
        name: this.state.TaskName,
        taskNotes: this.state.taskNotes,
        complete: this.state.complete,
        projectsId: this.state.projectsId
      };

      // Create the Task and redirect user to Task list
      TaskManager.post(Task).then(() =>
        this.props.history.push("/tasks")
      );
    }
  };

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <label htmlFor="TaskName">Task Name</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="TaskName"
                placeholder="Task Name"
              />

<label htmlFor="taskNote">Task Note</label>
              <input
                type="text"
                required
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