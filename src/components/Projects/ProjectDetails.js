import React, { Component } from 'react';
import ProjectManager from '../modules/ProjectManager';
// import './ProjectDetail.css'
import ActionBar from '../Nav/ActionBar';
import OptionBar from '../Nav/OptionBar';

class ProjectDetail extends Component {

  state = {
      projectName: "",
      dueDate: "",
      startDate: "",
      userId: ""
  }

  deleteItem = async () => {
    await ProjectManager.delete(this.props.projectId)
    this.props.history.push("/")
  };
  editItem = () => {
    this.props.history.push(`/projects/${this.props.projectId}/edit`)
  }

  componentDidMount(){
    console.log("ProjectDetail: ComponentDidMount");
    //get(id) from ProjectManager and hang on to the data; put it into state
    ProjectManager.get(this.props.projectId)
    .then((project) => {
      this.setState({
        name: project.name,
        dueDate: project.dueDate,
        startDate: project.startDate,
        userId: project.userId
      });
    });
  }

  render() {
    return (
        <div className="card">
        <OptionBar />
        <div className="card-content">
            <h3>Project: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Due Date: {this.state.dueDate}</p>
            <p>Start Date: {this.state.startDate}</p>

        </div>
        <ActionBar deleteItem={this.deleteItem} cancelItem={this.cancelItem} editItem={this.editItem}/>
      </div>
    );
  }
}

export default ProjectDetail;