import React, { Component } from "react";
import {Link} from "react-router-dom"

class ReferenceCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            Title:{" "}
            <span className="card-referencename">
              {this.props.reference.referenceName}
            </span>
          </h3>
          {this.props.reference.referenceNote ? (
            <p>Note: {this.props.reference.referenceNote}</p>
          ) : null}
          <p>Link: <a href={this.props.reference.url}>URL</a></p>
          <img src={this.props.reference.photoUrl}></img>
        </div>
        <Link to={`/projects/${this.props.projectId}/references/${this.props.reference.id}`}
          className="stretched-link"></Link>
      </div>
    );
  }
}

export default ReferenceCard;