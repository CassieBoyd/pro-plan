import React, { Component } from 'react';
import TaskManager from '../modules/TaskManager';
// import './TaskDetail.css'
import ActionBar from '../Nav/ActionBar';
import OptionBar from '../Nav/OptionBar';

class TaskDetail extends Component {

  state = {
      taskName: "",
      taskNote: "",
      complete: false
  }

  deleteItem = async () => {
    await TaskManager.delete(this.props.taskId)
    this.props.history.push(`/projects/${this.props.projectId}/tasks`)
  };
  editItem = () => {
    this.props.history.push(`/projects/${this.props.projectId}/tasks/${this.props.taskId}/edit`)
  }

  componentDidMount(){
    console.log("TaskDetail: ComponentDidMount");
    //get(id) from TaskManager and hang on to the data; put it into state
    TaskManager.get(this.props.taskId)
    .then((task) => {
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
        <OptionBar taskId={this.props.taskId} projectId={this.props.projectId}/>
        <div className="card-content">
            <h3> <span style={{ color: 'darkslategrey' }}>{this.state.taskName}</span></h3>
            <p>Note: {this.state.taskNote}</p>

        </div>
        <ActionBar deleteItem={this.deleteItem} cancelItem={this.cancelItem} editItem={this.editItem}/>
      </div>
    );
  }
}

export default TaskDetail;