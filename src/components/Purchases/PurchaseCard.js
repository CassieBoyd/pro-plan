import React, { Component } from "react";
import {Link} from "react-router-dom"

class PurchaseCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            <span style={this.props.purchase.complete ? {textDecoration: "line-through"} : null} className="card-purchasename">
              {this.props.purchase.purchaseName}
            </span>
          </h3>
          <p>${this.props.purchase.cost}</p>
          {/* <p>Link: <a href={this.props.purchase.url}>URL</a></p> */}
        </div>
        <Link to={`/projects/${this.props.projectId}/purchases/${this.props.purchase.id}`}
          className="stretched-link"></Link>
      </div>
    );
  }
}

export default PurchaseCard;
