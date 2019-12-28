import React, { Component } from "react";
import TaskCard from "./TaskCard";
import TaskManager from "../modules/TaskManager";
import ActionBar from "../Nav/ActionBar";
import OptionBar from "../Nav/OptionBar";
import './TaskList.css'

// Set state to an empty array
class TaskList extends Component {
  state = {
    tasks: []
  };

  addItem = () => {
    this.props.history.push(`/projects/${this.props.projectId}/tasks/new`);
  };
  componentDidMount() {
    console.log("Task List: ComponentDidMount");

    TaskManager.getAll(this.props.projectId).then(tasks => {
      this.setState({
        tasks: tasks
      });
    });
  }

  render() {
    console.log("Task List: Render");

    return (
      <div className="container-cards">
          <OptionBar projectId={this.props.projectId}/>
          <h3 className="title">Tasks</h3>
        {this.state.tasks.map(task => (
         <TaskCard key={task.id} task={task} {...this.props}/>
        ))}
        <ActionBar addItem={this.addItem} />
      </div>
    );
  }
}

export default TaskList;