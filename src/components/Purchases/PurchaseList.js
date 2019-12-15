import React, { Component } from "react";
//import the components we will need
import PurchaseCard from "./PurchaseCard";
import PurchaseManager from "../modules/PurchaseManager";
import ActionBar from "../Nav/ActionBar";
import OptionBar from "../Nav/OptionBar";

class PurchaseList extends Component {
  state = {
    purchases: []
  };

  addItem = () => {
    this.props.history.push(`/projects/${this.props.projectId}/purchases/new`);
  };
  componentDidMount() {
    console.log("Purchase List: ComponentDidMount");

    PurchaseManager.getAll(this.props.projectId).then(purchases => {
      this.setState({
        purchases: purchases
      });
    });
  }

  render() {
    console.log("Purchase List: Render");

    return (
      <div className="container-cards">
          <OptionBar projectId={this.props.projectId}/>
        {this.state.purchases.map(purchase => (
          <PurchaseCard key={purchase.id} purchase={purchase} {...this.props}/>
        ))}
        <ActionBar addItem={this.addItem} />
      </div>
    );
  }
}

export default PurchaseList;