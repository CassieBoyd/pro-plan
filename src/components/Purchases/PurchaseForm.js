import React, { Component } from "react";
import PurchaseManager from "../modules/PurchaseManager";
import ActionBar from "../Nav/ActionBar";
import { DropdownButton, Dropdown } from "react-bootstrap";

// import './PurchaseForm.css'

class PurchaseForm extends Component {
  state = {
    purchaseName: "",
    purchaseNote: "",
    quantity: "",
    purchased: false,
    loadingStatus: false
  };
  //   Function that calls constructNewPurchase method on props passed into it.
  saveItem = () => {
    this.constructNewPurchase();
    console.log("saving purchase");
  };
  cancelItem = () => {
    this.props.history.push(`/projects/${this.props.projectId}/purchases`);
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create Purchase      object, invoke the PurchaseManager post method, and redirect to the full Purchase list
   */
  constructNewPurchase = () => {
    if (this.state.purchaseName === "") {
      window.alert("Please input a Purchase Name");
    } else {
      this.setState({ loadingStatus: true });
      const purchase = {
        purchaseName: this.state.purchaseName.replace(/(\"|\')/g, "$1"),
        purchaseNote: this.state.purchaseNote.replace(/(\"|\')/g, "$1"),
        purchased: this.state.complete,
        projectId: this.props.projectId,
        cost: this.state.cost,
        url: this.state.url,
        units: this.state.units,
        quantity: this.state.quantity
      };

      // Create the Purchase and redirect user to Purchase list
      PurchaseManager.post(purchase).then(() =>
        this.props.history.push(`/projects/${this.props.projectId}/purchases`)
      );
    }
  };

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <label htmlFor="purchaseName">Item</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="purchaseName"
                placeholder="Purchase Name"
              />

              <label htmlFor="purchaseNote">Note</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="purchaseNote"
              />

              <label htmlFor="quantity">Quantity</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="quantity"
              />

              <label htmlFor="units">Units</label>

              <DropdownButton id="dropdown-basic-button" title="Units">
                <Dropdown.Item href="#/action-1">yd</Dropdown.Item>
                <Dropdown.Item href="#/action-2">in</Dropdown.Item>
                <Dropdown.Item href="#/action-3">ea</Dropdown.Item>
                <Dropdown.Item href="#/action-3">ft</Dropdown.Item>
                <Dropdown.Item href="#/action-3">gal</Dropdown.Item>
                <Dropdown.Item href="#/action-3">pt</Dropdown.Item>
                <Dropdown.Item href="#/action-3">pr</Dropdown.Item>
              </DropdownButton>

              <input
                type="drop-down"
                required
                onChange={this.handleFieldChange}
                id="units"
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
