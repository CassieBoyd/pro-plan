import React, { Component } from 'react';
import {Link} from "react-router-dom"
import { FiCheck } from "react-icons/fi"

class TaskCard extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            <span className="card-taskname">{this.props.task.taskName}</span></h3>
        </div>
        <Link to={`/projects/${this.props.projectId}/tasks/${this.props.task.id}`} className="stretched-link"></Link>
      </div>
    );
  }
}

export default TaskCard;