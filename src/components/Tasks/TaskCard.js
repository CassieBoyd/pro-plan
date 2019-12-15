import React, { Component } from 'react';
import {Link} from "react-router-dom"
class TaskCard extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="card">
        <div className="card-content">
          <h3>Task: <span className="card-taskname">{this.props.task.taskName}</span></h3>
          <p>Note: {this.props.task.taskNote}</p>
        </div>
        <Link to={`/projects/${this.props.projectId}/tasks/${this.props.task.id}`} className="stretched-link"></Link>
      </div>
    );
  }
}

export default TaskCard;