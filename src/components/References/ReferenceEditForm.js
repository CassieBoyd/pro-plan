import React, { Component } from "react";
import ReferenceManager from "../modules/ReferenceManager";
import ActionBar from "../Nav/ActionBar";
import OptionBar from "../Nav/OptionBar";
// import "./ReferenceEditForm.css"

class ReferenceEditForm extends Component {
  //set the initial state
  state = {
    referenceName: "",
    referenceNote: "",
    url: "",
    loadingStatus: true
  };

  saveItem = () => {
    this.updateExistingReference();
    console.log("saving reference stuff");
  };
  cancelItem = () => {
    this.props.history.push(`/projects/${this.props.projectId}/references/${this.props.referenceId}`);
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingReference = () => {
    this.setState({ loadingStatus: true });
    const editedReference = {
      id: this.props.match.params.referenceId,
      referenceName: this.state.referenceName,
      referenceNote: this.state.referenceNote,
      url: this.state.url,
      projectId: this.props.projectId
    };

    ReferenceManager.update(editedReference).then(() =>
      this.props.history.push(`/projects/${this.props.projectId}/references/${this.props.referenceId}`)
    );
  };

  componentDidMount() {
    ReferenceManager.get(this.props.match.params.referenceId).then(reference => {
      this.setState({
        referenceName: reference.referenceName,
        referenceNote: reference.referenceNote,
        url: reference.url,
        loadingStatus: false
      });
    });
  }

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <OptionBar
                referenceId={this.props.referenceId}
                projectId={this.props.projectId}
              />
              <label htmlFor="referenceName">Reference</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="referenceName"
                value={this.state.referenceName}
              />

              <label htmlFor="referenceNote">Note</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="referenceNote"
                value={this.state.referenceNote}
              />
              <label htmlFor="url">Link</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="url"
                value={this.state.url}
              />
            </div>
          </fieldset>
        </form>
        <ActionBar saveItem={this.saveItem} cancelItem={this.cancelItem} />
      </>
    );
  }
}

export default ReferenceEditForm;