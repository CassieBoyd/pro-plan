import React, { Component } from "react";
import SupplyManager from "../modules/SupplyManager";
// import './SupplyDetail.css'
import ActionBar from "../Nav/ActionBar";
import OptionBar from "../Nav/OptionBar";
import {Link} from "react-router-dom"


class SupplyDetail extends Component {
  state = {
    supplyName: "",
    supplyNote: "",
    units: "",
    quantity: ""
  };

  deleteItem = async () => {
    await SupplyManager.delete(this.props.supplyId);
    this.props.history.push(`/projects/${this.props.projectId}/supplies`);
  };
  editItem = () => {
    this.props.history.push(`/projects/${this.props.projectId}/supplies/${this.props.supplyId}/edit`);
  };

  componentDidMount() {
    console.log("SupplyDetail: ComponentDidMount");
    //get(id) from SupplyManager and hang on to the data; put it into state
    SupplyManager.get(this.props.supplyId).then(supply => {
      this.setState({
        supplyName: supply.supplyName,
        supplyNote: supply.supplyNote,
        units: supply.units,
        quantity: supply.quantity
      });
    });
  }

  render() {
    return (
      <div className="card">
        <OptionBar
          supplyId={this.props.supplyId}
          projectId={this.props.projectId}
        />
        <div className="card-content">
          <h3>
            <span>
              {this.state.supplyName}
            </span>
          </h3>
          {this.state.supplyNote ? (
            <p>Note: {this.state.supplyNote}</p>
          ) : null}

          {this.state.quantity ? (
            <p>Quantity: {this.state.quantity} {this.state.units}</p>
          ) : null}


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

export default SupplyDetail;