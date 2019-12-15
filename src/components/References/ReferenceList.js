import React, { Component } from "react";
import ReferenceCard from "./ReferenceCard";
import ReferenceManager from "../modules/ReferenceManager";
import ActionBar from "../Nav/ActionBar";
import OptionBar from "../Nav/OptionBar";

class ReferenceList extends Component {
  state = {
    references: []
  };

  addItem = () => {
    this.props.history.push(`/projects/${this.props.projectId}/references/new`);
  };
  componentDidMount() {
    console.log("Reference List: ComponentDidMount");

    ReferenceManager.getAll(this.props.projectId).then(references => {
      this.setState({
        references: references
      });
    });
  }

  // deleteItem = id => {
  //   ReferenceManager.delete(id).then(() => {
  //     ReferenceManager.getAll()
  //       //   setState after delete
  //       .then(newReferences => {
  //         this.setState({
  //           references: newReferences
  //         });
  //       });
  //   });
  // };

  render() {
    console.log("Reference List: Render");

    return (
      <div className="container-cards">
          <OptionBar projectId={this.props.projectId}/>
        {this.state.references.map(reference => (
          <ReferenceCard key={reference.id} reference={reference} {...this.props}           deleteReference={this.deleteReference}
          />
        ))}
        <ActionBar addItem={this.addItem} />
        {/* deleteItem={this.deleteItem} */}
      </div>
    );
  }
}

export default ReferenceList;