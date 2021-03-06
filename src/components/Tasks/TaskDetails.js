import React, { Component } from "react";
import TaskManager from "../modules/TaskManager";
// import './TaskDetail.css'
import ActionBar from "../Nav/ActionBar";
import OptionBar from "../Nav/OptionBar";

class TaskDetail extends Component {
  state = {
    taskName: "",
    taskNote: "",
    complete: false
  };

  deleteItem = async () => {
    await TaskManager.delete(this.props.taskId);
    this.props.history.push(`/projects/${this.props.projectId}/tasks`);
  };
  editItem = () => {
    this.props.history.push(
      `/projects/${this.props.projectId}/tasks/${this.props.taskId}/edit`
    );
  };
  completeItem = async () => {
    await TaskManager.patch({ id: this.props.taskId, complete: true });
    this.props.history.push(`/projects/${this.props.projectId}/tasks`);

  };

  componentDidMount() {
    console.log("TaskDetail: ComponentDidMount");
    TaskManager.get(this.props.taskId).then(task => {
      this.setState({
        taskName: task.taskName,
        taskNote: task.taskNote,
        complete: task.complete
      });
    });
  }

  render() {
    return (
      <div className="card">
        <OptionBar
          taskId={this.props.taskId}
          projectId={this.props.projectId}
        />
        <div className="card-content">
          <h3>
            <span className="detail">
              {this.state.taskName}
            </span>
          </h3>
          <p>{this.state.taskNote}</p>
        </div>
        <ActionBar
          deleteItem={this.deleteItem}
          cancelItem={this.cancelItem}
          editItem={this.editItem}
          completeItem={this.completeItem}
        />
      </div>
    );
  }
}

export default TaskDetail;
