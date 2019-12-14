import React, { Component } from "react";
//import the components we will need
import TaskCard from "./TaskCard";
import TaskManager from "../modules/TaskManager";
import ActionBar from "../Nav/ActionBar";
import OptionBar from "../Nav/OptionBar";

class TaskList extends Component {
  state = {
    tasks: []
  };

  addItem = () => {
    this.props.history.push("/tasks/new");
  };
  componentDidMount() {
    console.log("Task List: ComponentDidMount");

    TaskManager.getAll().then(tasks => {
      this.setState({
        tasks: tasks
      });
    });
  }

  render() {
    console.log("Task List: Render");

    return (
      <div className="container-cards">
          <OptionBar />
        {this.state.projects.map(project => (
          <TaskCard key={project.id} project={project} {...this.props}/>
        ))}
        <ActionBar addItem={this.addItem} />
      </div>
    );
  }
}

export default TaskList;