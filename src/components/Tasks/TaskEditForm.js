import React, { Component } from "react";
import TaskManager from "../modules/TaskManager";
import ActionBar from "../Nav/ActionBar";
import OptionBar from "../Nav/OptionBar";
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
    this.props.history.push(`/projects/${this.props.projectId}/tasks`);
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
      this.props.history.push(`/projects/${this.props.projectId}/tasks`)
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
        <form>
          <fieldset>
            <div className="formgrid">
              <OptionBar
                taskId={this.props.taskId}
                projectId={this.props.projectId}
              />
              <label htmlFor="taskName">Task</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="taskName"
                value={this.state.taskName}
              />

              <label htmlFor="taskNote">Note</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="taskNote"
                value={this.state.taskNote}
              />
            </div>
          </fieldset>
        </form>
        <ActionBar saveItem={this.saveItem} cancelItem={this.cancelItem} />
      </>
    );
  }
}

export default TaskEditForm;
