import React, { Component } from 'react';
import {Link} from "react-router-dom"


// Style attribute has a conditional that checks the completion status of each task and applies the line-through textDecoration to completed tasks. The Link tag causes each Card to be a clickable link leading to that Card's details. Props are being passed down from TaskList.
class TaskCard extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            <span style={this.props.task.complete ? {textDecoration: "line-through"} : null} className="card-taskname">{this.props.task.taskName}</span></h3>
        </div>
        <Link to={`/projects/${this.props.projectId}/tasks/${this.props.task.id}`} className="stretched-link"></Link>
      </div>
    );
  }
}

export default TaskCard;