import React, { Component } from "react";
import PurchaseManager from "../modules/PurchaseManager";
import ActionBar from "../Nav/ActionBar";
// import './PurchaseForm.css'

class PurchaseForm extends Component {
  state = {
    PurchaseName: "",
    dueDate: "",
    startDate: "",
    userId: Number(localStorage["userId"]),
    loadingStatus: false
  };
  saveItem = () => {
    this.constructNewPurchase()
    console.log("saving purchase stuff");
  };
  cancelItem = () => {
    this.props.history.push("/");
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create Purchase      object, invoke the PurchaseManager post method, and redirect to the full Purchase list
   */
  constructNewPurchase = () => {
    if (this.state.PurchaseName === "" || this.state.dueDate === "") {
      window.alert("Please input a Purchase Name and Due Date");
    } else {
      this.setState({ loadingStatus: true });
      const Purchase = {
        name: this.state.PurchaseName,
        dueDate: this.state.dueDate,
        startDate: this.state.startDate,
        userId: this.state.userId
      };

      // Create the Purchase and redirect user to Purchase list
      PurchaseManager.post(Purchase).then(() =>
        this.props.history.push("/purchases")
      );
    }
  };

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <label htmlFor="PurchaseName">Name</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="PurchaseName"
                placeholder="Purchase Name"
              />

<label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                required
                onChange={this.handleFieldChange}
                id="startDate"
                
              />

              <label htmlFor="dueDate">Due Date</label>
              <input
                type="date"
                required
                onChange={this.handleFieldChange}
                id="dueDate"
                
              />
            </div>
            
          </fieldset>
        </form>
        <ActionBar saveItem={this.saveItem} cancelItem={this.cancelItem} />
      </>
    );
  }
}

export default PurchaseForm;