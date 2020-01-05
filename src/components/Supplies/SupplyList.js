import React, { Component } from "react";
//import the components we will need
import SupplyCard from "./SupplyCard";
import SupplyManager from "../modules/SupplyManager";
import ActionBar from "../Nav/ActionBar";
import OptionBar from "../Nav/OptionBar";

class SupplyList extends Component {
  state = {
    supplies: []
  };

  addItem = () => {
    this.props.history.push(`/projects/${this.props.projectId}/supplies/new`);
  };
  componentDidMount() {
    console.log("Supply List: ComponentDidMount");

    SupplyManager.getAll(this.props.projectId).then(supplies => {
      this.setState({
        supplies: supplies
      });
    });
  }

  render() {
    console.log("Supply List: Render");

    return (
      <div className="container-cards">
          {/* Passing projectId to OptionBar so user can go from one option to another within a Project and see the associated options of that Project */}
          <OptionBar projectId={this.props.projectId}/>
          <h3 className="title">Supplies</h3>
        {this.state.supplies.map(supply => (
          <SupplyCard key={supply.id} supply={supply} {...this.props}/>
        ))}
        <ActionBar addItem={this.addItem} />
      </div>
    );
  }
}

export default SupplyList;