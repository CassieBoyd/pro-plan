import React, { Component } from "react";
import {Link} from "react-router-dom"

class SupplyCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            <span className="card-supplyname">
              {this.props.supply.supplyName}
            </span>
          </h3>
          {this.props.supply.supplyNote ? (
            <p>Note: {this.props.supply.supplyNote}</p>
          ) : null}
          <p>Quantity: {this.props.supply.quantity}</p>
          <p>Units: {this.props.supply.units}</p>
        </div>
        <Link to={`/projects/${this.props.projectId}/supplies/${this.props.supply.id}`}
          className="stretched-link"></Link>
      </div>
    );
  }
}

export default SupplyCard;