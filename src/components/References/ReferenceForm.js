import React, { Component } from "react";
import ReferenceManager from "../modules/ReferenceManager";
import ActionBar from "../Nav/ActionBar";

// import './ReferenceForm.css'

class ReferenceForm extends Component {
  state = {
    referenceName: "",
    referenceNote: "",
    url: "",
    loadingStatus: false
  };
  //   Function that calls constructNewReference method on props passed into it.
  saveItem = () => {
    this.constructNewReference();
    console.log("saving reference");
  };
  cancelItem = () => {
    this.props.history.push(`/projects/${this.props.projectId}/references`);
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewReference = () => {
    if (this.state.referenceName === "") {
      window.alert("Please input a Reference Name");
    } else {
      this.setState({ loadingStatus: true });
      const reference = {
        referenceName: this.state.referenceName.replace(/(\"|\')/g, "$1"),
        referenceNote: this.state.referenceNote.replace(/(\"|\')/g, "$1"),
        projectId: this.props.projectId,
        url: this.state.url,
      };

      // Create the Reference and redirect user to Reference list
      ReferenceManager.post(reference).then(() =>
        this.props.history.push(`/projects/${this.props.projectId}/references`)
      );
    }
  };

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <label htmlFor="referenceName">Title</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="referenceName"
                placeholder="Reference Name"
              />

              <label htmlFor="referenceNote">Note</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="referenceNote"
              />
 
              <label htmlFor="url">Link</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="url"
              />
              
            </div>
          </fieldset>
        </form>
        <ActionBar saveItem={this.saveItem} cancelItem={this.cancelItem} />
      </>
    );
  }
}

export default ReferenceForm;