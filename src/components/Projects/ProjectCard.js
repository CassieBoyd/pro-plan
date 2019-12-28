import React, { Component } from 'react';
import {Link} from "react-router-dom"
class ProjectCard extends Component {
  render() {
    // console.log to see what props are being passed from ProjectList
    console.log("Proj Card",this.props)
    //  Use stretched-link inside card block to make whole card clickable to go to the individual project 
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('../../projectName.jpg')} alt="Project" thumbnail />
          </picture> */}
          <h3><span className="card-projectname">{this.props.project.name}</span></h3>
          <p>Due Date: {this.props.project.dueDate}</p>
        </div>
        <Link to={`/projects/${this.props.project.id}`} className="stretched-link"></Link>
      </div>
    );
  }
}

export default ProjectCard;