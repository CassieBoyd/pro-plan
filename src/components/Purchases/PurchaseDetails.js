import React, { Component } from "react";
import PurchaseManager from "../modules/PurchaseManager";
// import './PurchaseDetail.css'
import ActionBar from "../Nav/ActionBar";
import OptionBar from "../Nav/OptionBar";
import {Link} from "react-router-dom"


class PurchaseDetail extends Component {
  state = {
    purchaseName: "",
    purchaseNote: "",
    url: "",
    cost: "",
    units: "",
    quantity: ""
  };

  deleteItem = async () => {
    await PurchaseManager.delete(this.props.purchaseId);
    this.props.history.push(`/projects/${this.props.projectId}/purchases`);
  };
  editItem = () => {
    this.props.history.push(`/projects/${this.props.projectId}/purchases/${this.props.purchaseId}/edit`);
  };

  componentDidMount() {
    console.log("PurchaseDetail: ComponentDidMount");
    //get(id) from PurchaseManager and hang on to the data; put it into state
    PurchaseManager.get(this.props.purchaseId).then(purchase => {
      this.setState({
        purchaseName: purchase.purchaseName,
        purchaseNote: purchase.purchaseNote,
        url: purchase.url,
        cost: purchase.cost,
        units: purchase.units,
        quantity: purchase.quantity
      });
    });
  }

  render() {
    return (
      <div className="card">
        <OptionBar
          purchaseId={this.props.purchaseId}
          projectId={this.props.projectId}
        />
        <div className="card-content">
          <h3>
            {/* Purchase:{" "} */}
            <span style={{ color: "darkslategrey" }}>
              {this.state.purchaseName}
            </span>
          </h3>
          <p>Note: {this.state.purchaseNote}</p>
          <p>Link: <a href={this.state.url}>URL</a></p>
          <p>Cost: ${this.state.cost}</p>
          <p>Units: {this.state.units}</p>
          <p>Quantity: {this.state.quantity}</p>


        </div>
        <ActionBar
          deleteItem={this.deleteItem}
          cancelItem={this.cancelItem}
          editItem={this.editItem}
        />
        
      </div>
    );
  }
}

export default PurchaseDetail;