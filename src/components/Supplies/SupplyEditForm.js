import React, { Component } from "react";
import SupplyManager from "../modules/SupplyManager";
import ActionBar from "../Nav/ActionBar";
import OptionBar from "../Nav/OptionBar";
import { DropdownButton, Dropdown, Form, Row, Col } from "react-bootstrap";

// import "./SupplyEditForm.css"

class SupplyEditForm extends Component {
  //set the initial state
  state = {
    supplyName: "",
    supplyNote: "",
    units: "",
    quantity: "",
    loadingStatus: true
  };

  saveItem = () => {
    this.updateExistingSupply();
    console.log("saving supply stuff");
  };
  cancelItem = () => {
    this.props.history.push(
      `/projects/${this.props.projectId}/supplies/${this.props.supplyId}`
    );
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingSupply = () => {
    this.setState({ loadingStatus: true });
    const editedSupply = {
      id: this.props.match.params.supplyId,
      supplyName: this.state.supplyName,
      supplyNote: this.state.supplyNote,
      units: this.state.units,
      quantity: this.state.quantity,
      projectId: this.props.projectId
    };

    SupplyManager.update(editedSupply).then(() =>
      this.props.history.push(
        `/projects/${this.props.projectId}/supplies/${this.props.supplyId}`
      )
    );
  };

  componentDidMount() {
    SupplyManager.get(this.props.match.params.supplyId).then(supply => {
      this.setState({
        supplyName: supply.supplyName,
        supplyNote: supply.supplyNote,
        units: supply.units,
        quantity: supply.quantity,
        loadingStatus: false
      });
    });
  }

  render() {
    return (
      <>
        <OptionBar
          supplyId={this.props.supplyId}
          projectId={this.props.projectId}
        />
        <Form style={{ overflow: "scroll" }}>
          <Form.Group>
            <Form.Label>Item:</Form.Label>
            <Form.Control
              type="text"
              required
              className="name"
              onChange={this.handleFieldChange}
              id="supplyName"
              value={this.state.supplyName}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Note:</Form.Label>
            <Form.Control
              as="textarea"
              className="note"
              rows="3"
              onChange={this.handleFieldChange}
              id="supplyNote"
              value={this.state.supplyNote}
            />
          </Form.Group>
          <Row>
            <Col>
            
              <Form.Label>Quantity:</Form.Label>
              <div style={{ display: "flex" }}>
                <Form.Control
                  type="text"
                  className="quantity"
                  required
                  onChange={this.handleFieldChange}
                  id="quantity"
                  value={this.state.quantity}
                />

                <DropdownButton
                  id="dropdown-basic-button"
                  title={this.state.units ? this.state.units : "Units"}
                  value={this.state.units}>
                  <Dropdown.Item
                    onSelect={() => this.setState({ units: "ea" })}>
                    ea
                  </Dropdown.Item>
                  <Dropdown.Item
                    onSelect={() => this.setState({ units: "in" })}>
                    in
                  </Dropdown.Item>
                  <Dropdown.Item
                    onSelect={() => this.setState({ units: "yd" })}>
                    yd
                  </Dropdown.Item>
                  <Dropdown.Item
                    onSelect={() => this.setState({ units: "ft" })}>
                    ft
                  </Dropdown.Item>
                  <Dropdown.Item
                    onSelect={() => this.setState({ units: "gal" })}>
                    gal
                  </Dropdown.Item>
                  <Dropdown.Item
                    onSelect={() => this.setState({ units: "pt" })}>
                    pt
                  </Dropdown.Item>
                  <Dropdown.Item
                    onSelect={() => this.setState({ units: "pr" })}>
                    pr
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            </Col>
          </Row>
        </Form>
        <ActionBar saveItem={this.saveItem} cancelItem={this.cancelItem} />
      </>
    );
  }
}

export default SupplyEditForm;
