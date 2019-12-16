import React, { Component } from "react";
import ReferenceManager from "../modules/ReferenceManager";
// import './ReferenceDetail.css'
import ActionBar from "../Nav/ActionBar";
import OptionBar from "../Nav/OptionBar";
import {Link} from "react-router-dom"


class ReferenceDetail extends Component {
  state = {
    referenceName: "",
    referenceNote: "",
    url: ""
  };

  deleteItem = async () => {
    await ReferenceManager.delete(this.props.referenceId);
    this.props.history.push(`/projects/${this.props.projectId}/references`);
  };
  editItem = () => {
    this.props.history.push(`/projects/${this.props.projectId}/references/${this.props.referenceId}/edit`);
  };

  componentDidMount() {
    console.log("ReferenceDetail: ComponentDidMount");
    //get(id) from ReferenceManager and hang on to the data; put it into state
    ReferenceManager.get(this.props.referenceId).then(reference => {
      this.setState({
        referenceName: reference.referenceName,
        referenceNote: reference.referenceNote,
        url: reference.url
      });
    });
  }

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
          <p>Note: {this.state.referenceNote}</p>
          <p>Link: <a href={this.state.url}>URL</a></p>

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
