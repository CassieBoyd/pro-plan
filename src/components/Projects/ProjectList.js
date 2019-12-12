import React, { Component } from "react";
//import the components we will need
import ProjectCard from "./ProjectCard";
import ProjectManager from "../modules/ProjectManager";
import ActionBar from "../Nav/ActionBar";

class ProjectList extends Component {
  state = {
    projects: []
  };

  addItem = () => {
    this.props.history.push("/projects/new");
  };
  componentDidMount() {
    console.log("Project List: ComponentDidMount");

    ProjectManager.getAll().then(projects => {
      this.setState({
        projects: projects
      });
    });
  }

  render() {
    console.log("Project List: Render");

    return (
      <div className="container-cards">
        {this.state.projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
        <ActionBar addItem={this.addItem} />
      </div>
    );
  }
}

export default ProjectList;
