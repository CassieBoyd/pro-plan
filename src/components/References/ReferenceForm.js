import React, { Component } from "react";
import ReferenceManager from "../modules/ReferenceManager";
import ActionBar from "../Nav/ActionBar";
import { Button, Form } from "react-bootstrap";
import PhotoManager from "../modules/PhotoManager";
import OptionBar from "../Nav/OptionBar";

// import './ReferenceForm.css'

class ReferenceForm extends Component {
  state = {
    referenceName: "",
    referenceNote: "",
    url: "",
    stateToChange: null,
    loadingStatus: false,
    photoUrl: "",
    type: "reference"
  };

  fileSelectorHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  fileUploadHandler = async e => {
    console.log("UPLOAD");
    e.preventDefault();
    const files = this.state.selectedFile;
    const data = new FormData();
    data.append("file", files);
    data.append("upload_preset", "lwhplhx3");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/proplan/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();
    this.setState({
      photoUrl: file.secure_url
    });
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

  constructNewReference = async () => {
    if (this.state.referenceName === "") {
      window.alert("Please input a Reference Name");
    } else {
      this.setState({ loadingStatus: true });
      const reference = {
        referenceName: this.state.referenceName.replace(/(\"|\')/g, "$1"),
        referenceNote: this.state.referenceNote.replace(/(\"|\')/g, "$1"),
        projectId: this.props.projectId,
        url: this.state.url
      };

      // Create the Reference and redirect user to Reference list
      const response = await ReferenceManager.post(reference)
      const photo = {
        type: this.state.type,
        typeId: response.id,
        photoUrl: this.state.photoUrl
      }
      await PhotoManager.post(photo)
        this.props.history.push(`/projects/${this.props.projectId}/references`)
    }
  };

  render() {
    return (
      <>
      <OptionBar
              taskId={this.props.taskId}
              projectId={this.props.projectId}
            />
        <form>
          <fieldset>
            <div className="formgrid">
              <Form.Label>Title</Form.Label>
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
              <input
                accept="image/*"
                id="contained-button-file"
                type="file"
                onChange={this.fileSelectorHandler}
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  component="span"
                  onClick={this.fileUploadHandler}>
                  Upload
                </Button>
              </label>{" "}
              <br />
            </div>
          </fieldset>
        </form>
        <ActionBar saveItem={this.saveItem} cancelItem={this.cancelItem} />
      </>
    );
  }
}

export default ReferenceForm;
