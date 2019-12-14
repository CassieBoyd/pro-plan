import React, { Component } from 'react';
import TaskManager from '../modules/TaskManager';
// import './TaskDetail.css'
import ActionBar from '../Nav/ActionBar';
import OptionBar from '../Nav/OptionBar';

class TaskDetail extends Component {

  state = {
      taskName: "",
      taskNote: "",
      startDate: "",
      userId: ""
  }

  deleteItem = async () => {
    await TaskManager.delete(this.props.taskId)
    this.props.history.push("/")
  };
  editItem = () => {
    this.props.history.push(`/tasks/${this.props.taskId}/edit`)
  }

  componentDidMount(){
    console.log("TaskDetail: ComponentDidMount");
    //get(id) from TaskManager and hang on to the data; put it into state
    TaskManager.get(this.props.taskId)
    .then((task) => {
      this.setState({
        name: task.name,
        dueDate: task.dueDate,
        startDate: task.startDate,
        userId: task.userId
      });
    });
  }

  render() {
    return (
        <div className="card">
        <OptionBar taskId={this.props.taskId}/>
        <div className="card-content">
            <h3>Task: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Due Date: {this.state.dueDate}</p>
            <p>Start Date: {this.state.startDate}</p>

        </div>
        <ActionBar deleteItem={this.deleteItem} cancelItem={this.cancelItem} editItem={this.editItem}/>
      </div>
    );
  }
}

export default TaskDetail;