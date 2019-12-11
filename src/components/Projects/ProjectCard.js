import React, { Component } from 'react';

class ProjectCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('../../projectName.jpg')} alt="Project" thumbnail />
          </picture> */}
          <h3>Project: <span className="card-petname">Proton Pack</span></h3>
          <p>Due Date: 2020-12-21</p>
        </div>
      </div>
    );
  }
}

export default ProjectCard;