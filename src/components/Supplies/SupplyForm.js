import React, { Component } from "react";
import SupplyManager from "../modules/SupplyManager";
import ActionBar from "../Nav/ActionBar";
import { DropdownButton, Dropdown, Form, Row, Col } from "react-bootstrap";
import OptionBar from "../Nav/OptionBar";

// import './SupplyForm.css'

class SupplyForm extends Component {
  state = {
    supplyName: "",
    supplyNote: "",
    quantity: "",
    // collected: false,
    loadingStatus: false
  };
  //   Function that calls constructNewSupply method on props passed into it.
  saveItem = () => {
    this.constructNewSupply();
    console.log("saving supply");
  };
  cancelItem = () => {
    this.props.history.push(`/projects/${this.props.projectId}/supplies`);
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create Supply      object, invoke the SupplyManager post method, and redirect to the full Supply list
   */
  constructNewSupply = () => {
    if (this.state.supplyName === "") {
      window.alert("Please input a Supply Name");
    } else {
      this.setState({ loadingStatus: true });
      const supply = {
        supplyName: this.state.supplyName.replace(/(\"|\')/g, "$1"),
        supplyNote: this.state.supplyNote.replace(/(\"|\')/g, "$1"),
        // collected: this.state.collected,
        projectId: this.props.projectId,
        units: this.state.units,
        quantity: this.state.quantity
      };

      // Create the Supply and redirect user to Supply list
      SupplyManager.post(supply).then(() =>
        this.props.history.push(`/projects/${this.props.projectId}/supplies`)
      );
    }
  };

  render() {
    return (
      <>
        <OptionBar
          taskId={this.props.taskId}
          projectId={this.props.projectId}
        />
        <h3 className="title">Add A Supply</h3>
        <Form style={{overflow: "scroll"}}>
          <Form.Group>
            <Form.Label>Item:</Form.Label>
            <Form.Control
              type="text"
              className="name"
              required
              onChange={this.handleFieldChange}
              id="supplyName"
              placeholder="Item"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Note:</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              className="note"
              required
              onChange={this.handleFieldChange}
              id="supplyNote"
              placeholder="Note"
            />
          </Form.Group>

          <Row>
            <Col>
              <Form.Label>Quantity:</Form.Label>
              <div style={{ display: "flex" }}>
                <Form.Control
                  type="text"
                  className="quantity"
                  onChange={this.handleFieldChange}
                  id="quantity"
                  placeholder="Qty."
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

export default SupplyForm;
