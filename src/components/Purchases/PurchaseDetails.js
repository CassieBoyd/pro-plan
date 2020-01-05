import React, { Component } from "react";
import PurchaseManager from "../modules/PurchaseManager";
import ActionBar from "../Nav/ActionBar";
import OptionBar from "../Nav/OptionBar";


class PurchaseDetail extends Component {
  state = {
    purchaseName: "",
    purchaseNote: "",
    url: "",
    cost: "",
    units: "",
    quantity: "",
    complete: false
  };

  deleteItem = async () => {
    await PurchaseManager.delete(this.props.purchaseId);
    this.props.history.push(`/projects/${this.props.projectId}/purchases`);
  };
  editItem = () => {
    this.props.history.push(`/projects/${this.props.projectId}/purchases/${this.props.purchaseId}/edit`);
  };
  completeItem = async () => {
    await PurchaseManager.patch({ id: this.props.purchaseId, complete: true })
    this.props.history.push(`/projects/${this.props.projectId}/purchases`)
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
        quantity: purchase.quantity,
        complete: purchase.complete
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
            <span className="detail">
              {this.state.purchaseName}
            </span>
          </h3>
          {this.state.purchaseNote ? (
            <p>Note: {this.state.purchaseNote}</p>
          ) : null}
          {this.state.url ? (
          <p>Link: <a href={this.state.url}>URL</a></p>
          ) : null}
          <p>Cost: ${this.state.cost}</p>
          <p>Quantity: {this.state.quantity} {this.state.units}</p>


        </div>
        <ActionBar
          deleteItem={this.deleteItem}
          completeItem={this.completeItem}
          editItem={this.editItem}
        />
        
      </div>
    );
  }
}

export default PurchaseDetail;