import React, { Component } from "react";
import ProjectManager from "../modules/ProjectManager";
import ActionBar from "../Nav/ActionBar";
// import "./ProjectForm.css"

class ProjectEditForm extends Component {
  //set the initial state
  state = {
    projectName: "",
    dueDate: "",
    startDate: "",
    userId: "",
    loadingStatus: true
  };

  saveItem = () => {
    this.updateExistingProject();
    console.log("saving project stuff");
  };
  cancelItem = () => {
    this.props.history.push(`/projects/${this.props.match.params.projectId}`);
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingProject = () => {
    this.setState({ loadingStatus: true });
    const editedProject = {
      id: this.props.match.params.projectId,
      name: this.state.projectName,
      dueDate: this.state.dueDate,
      startDate: this.state.startDate,
      userId: this.state.userId
    };

    ProjectManager.update(editedProject).then(() =>
      this.props.history.push(`/projects/${this.props.match.params.projectId}`)
    );
  };

  componentDidMount() {
    ProjectManager.get(this.props.match.params.projectId).then(project => {
      this.setState({
        projectName: project.name,
        dueDate: project.dueDate,
        startDate: project.startDate,
        userId: Number(localStorage["userId"]),
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
              <label htmlFor="projectName">Project Name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="projectName"
                value={this.state.projectName}
              />

              <label htmlFor="dueDate">Due Date</label>
              <input
                type="date"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="dueDate"
                value={this.state.dueDate}
              />

              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="startDate"
                value={this.state.startDate}
              />
            </div>
          </fieldset>
        </form>
        <ActionBar saveItem={this.saveItem} cancelItem={this.cancelItem} />
      </>
    );
  }
}

export default ProjectEditForm;
