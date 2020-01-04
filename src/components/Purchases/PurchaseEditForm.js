import React, { Component } from "react";
import PurchaseManager from "../modules/PurchaseManager";
import ActionBar from "../Nav/ActionBar";
import OptionBar from "../Nav/OptionBar";
import { DropdownButton, Dropdown, Form } from "react-bootstrap";

// import "./PurchaseEditForm.css"

class PurchaseEditForm extends Component {
  //set the initial state
  state = {
    purchaseName: "",
    purchaseNote: "",
    url: "",
    cost: "",
    units: "",
    quantity: "",
    purchased: "",
    loadingStatus: true
  };

  saveItem = () => {
    this.updateExistingPurchase();
    console.log("saving purchase stuff");
  };
  cancelItem = () => {
    this.props.history.push(`/projects/${this.props.projectId}/purchases/${this.props.purchaseId}`);
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingPurchase = () => {
    this.setState({ loadingStatus: true });
    const editedPurchase = {
      id: this.props.match.params.purchaseId,
      purchaseName: this.state.purchaseName,
      purchaseNote: this.state.purchaseNote,
      purchased: this.state.purchased,
      url: this.state.url,
      cost: this.state.cost,
      units: this.state.units,
      quantity: this.state.quantity,
      projectId: this.props.projectId
    };

    PurchaseManager.update(editedPurchase).then(() =>
      this.props.history.push(`/projects/${this.props.projectId}/purchases/${this.props.purchaseId}`)
    );
  };

  componentDidMount() {
    PurchaseManager.get(this.props.match.params.purchaseId).then(purchase => {
      this.setState({
        purchaseName: purchase.purchaseName,
        purchaseNote: purchase.purchaseNote || "",
        purchased: purchase.purchased,
        url: purchase.url || "",
        cost: purchase.cost || "",
        units: purchase.units || "",
        quantity: purchase.quantity || "",
        loadingStatus: false
      });
    });
  }

  render() {
    return (
      <>
              <OptionBar
                purchaseId={this.props.purchaseId}
                projectId={this.props.projectId}
                />
              <Form style={{overflow: "scroll"}}>
                <Form.Group>
              <Form.Label>Item:</Form.Label>
              <Form.Control
                type="text"
                required
                className="name"
                onChange={this.handleFieldChange}
                id="purchaseName"
                value={this.state.purchaseName}
              />
              </Form.Group>

<Form.Group>
              <Form.Label>Note:</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                className="note"
                onChange={this.handleFieldChange}
                id="purchaseNote"
                value={this.state.purchaseNote}
              />
              </Form.Group>

              <Form.Label>Quantity:</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={this.handleFieldChange}
                id="quantity"
                value={this.state.quantity}
              />

              <DropdownButton
                id="dropdown-basic-button"
                title={this.state.units ? this.state.units : "Units"}
                value={this.state.units}>
                <Dropdown.Item onSelect={() => this.setState({ units: "ea" })}>
                  ea
                </Dropdown.Item>
                <Dropdown.Item onSelect={() => this.setState({ units: "in" })}>
                  in
                </Dropdown.Item>
                <Dropdown.Item onSelect={() => this.setState({ units: "yd" })}>
                  yd
                </Dropdown.Item>
                <Dropdown.Item onSelect={() => this.setState({ units: "ft" })}>
                  ft
                </Dropdown.Item>
                <Dropdown.Item onSelect={() => this.setState({ units: "gal" })}>
                  gal
                </Dropdown.Item>
                <Dropdown.Item onSelect={() => this.setState({ units: "pt" })}>
                  pt
                </Dropdown.Item>
                <Dropdown.Item onSelect={() => this.setState({ units: "pr" })}>
                  pr
                </Dropdown.Item>
              </DropdownButton>

              <label htmlFor="cost">Cost</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="cost"
                value={this.state.cost}
              />
              

              <label htmlFor="url">Link</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="url"
                value={this.state.url}
              />
          
        </Form>
        <ActionBar saveItem={this.saveItem} cancelItem={this.cancelItem} />
      </>
    );
  }
}

export default PurchaseEditForm;
