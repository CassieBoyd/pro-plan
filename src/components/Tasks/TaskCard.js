import React, { Component } from 'react';

class TaskCard extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="card">
        <div className="card-content">
          <h3>Task: <span className="card-taskname">{this.props.task.taskName}</span></h3>
          <p>Note: {this.props.task.taskNote}</p>
        </div>
        <a href={`/tasks/${this.props.task.id}`} className="stretched-link"></a>
      </div>
    );
  }
}

export default TaskCard;