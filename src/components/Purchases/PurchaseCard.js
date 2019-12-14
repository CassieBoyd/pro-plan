import React, { Component } from "react";
import {Link} from "react-router-dom"

class PurchaseCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            Item:{" "}
            <span className="card-purchasename">
              {this.props.purchase.purchaseName}
            </span>
          </h3>
          {this.props.purchase.purchaseNote ? (
            <p>Note: {this.props.purchase.purchaseNote}</p>
          ) : null}
          <p>Quantity: {this.props.purchase.quantity}</p>
          <p>Units: {this.props.purchase.units}</p>
          <p>Cost: {this.props.purchase.cost}</p>
          <p>Link: <a href={this.props.purchase.url}>URL</a></p>
        </div>
        <Link to={`/projects/${this.props.projectId}/purchases/${this.props.purchase.id}`}
          className="stretched-link"></Link>
      </div>
    );
  }
}

export default PurchaseCard;
