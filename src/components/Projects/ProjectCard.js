import React, { Component } from 'react';

class ProjectCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./logo.svg')} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-petname">Doodles</span></h3>
          <p>Breed: Poodle</p>
        </div>
      </div>
    );
  }
}

export default ProjectCard;