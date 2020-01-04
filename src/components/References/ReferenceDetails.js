import React, { Component } from "react";
import ReferenceManager from "../modules/ReferenceManager";
import ActionBar from "../Nav/ActionBar";
import OptionBar from "../Nav/OptionBar";
import {Link} from "react-router-dom"
import PhotoManager from "../modules/PhotoManager";
import "./ReferenceDetails.css"


class ReferenceDetail extends Component {
  state = {
    referenceName: "",
    referenceNote: "",
    url: "",
    photos: []
  };

  deleteItem = async () => {
    await ReferenceManager.delete(this.props.referenceId);
    this.props.history.push(`/projects/${this.props.projectId}/references`);
  };
  editItem = () => {
    this.props.history.push(`/projects/${this.props.projectId}/references/${this.props.referenceId}/edit`);
  };

  async componentDidMount() {
    console.log("ReferenceDetail: ComponentDidMount");
    //get(id) from ReferenceManager and hang on to the data; put it into state
    const reference = await ReferenceManager.get(this.props.referenceId)
      const photos = await PhotoManager.getAll("reference", this.props.referenceId)
      this.setState({
        referenceName: reference.referenceName,
        referenceNote: reference.referenceNote,
        url: reference.url,
        photos: photos
      });
    };


  render() {
    return (
      <div className="card">
        <OptionBar
          referenceId={this.props.referenceId}
          projectId={this.props.projectId}
        />
        <div className="card-content">
          <h3>
            {/* Reference:{" "} */}
            <span style={{ color: "darkslategrey" }}>
              {this.state.referenceName}
            </span>
          </h3>
          {this.state.referenceNote ? (
            <p>Note: {this.state.referenceNote}</p>
          ) : null}
          {this.state.url ? (
            <p>Link: <a href={this.state.url}>URL</a></p>
          ) : null}
          {this.state.photos.map(photo => (
                      <img key={photo.id} src={photo.photoUrl}></img>

          ))
          }

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

export default ReferenceDetail;
