import React, { Component } from 'react';

class PurchaseCard extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="card">
        <div className="card-content">
          <h3>Item: <span className="card-purchasename">{this.props.purchase.purchaseName}</span></h3>
          <p>Note: {this.props.purchase.purchaseNote}</p>
          <p>Quantity: {this.props.purchase.quantity}</p>
          <p>Units: {this.props.purchase.units}</p>
          <p>Cost: {this.props.purchase.cost}</p>

        </div>
        <a href={`/projects/${this.props.projectId}/purchases/${this.props.purchase.id}`} className="stretched-link"></a>
      </div>
    );
  }
}

export default PurchaseCard;