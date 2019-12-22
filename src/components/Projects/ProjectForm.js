import React, { Component } from "react";
import ProjectManager from "../modules/ProjectManager";
import ActionBar from "../Nav/ActionBar";
// import './ProjectForm.css'

class ProjectForm extends Component {
  state = {
    ProjectName: "",
    dueDate: "",
    startDate: "",
    userId: Number(localStorage["userId"]),
    url: "",
    loadingStatus: false
  };
  saveItem = () => {
    this.constructNewProject()
    console.log("saving project stuff");
  };
  cancelItem = () => {
    this.props.history.push("/");
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  uploadWidget = () => {
    window.cloudinary.openUploadWidget({ cloud_name: 'proplan', upload_preset: 'lwhplhx3', tags:['atag']},
        (error, result) => {
            // See what cloudinary returns
            console.log(result);
  
            // Building the entire URL for the uploaded image using the data cloudinary returns
            console.log("https://res.cloudinary.com/dveixyqzy/image/upload/v1576090193/" + result[0].public_id)
  
            // Just like other input forms, changing state so that the imageUrl property will contain the URL of the uploaded image
            this.setState({url: `https://res.cloudinary.com/dveixyqzy/image/upload/v1576090193/${result[0].public_id}`})
        });
  }

  /*  Local method for validation, set loadingStatus, create Project      object, invoke the ProjectManager post method, and redirect to the full Project list
   */
  constructNewProject = () => {
    if (this.state.ProjectName === "" || this.state.dueDate === "") {
      window.alert("Please input a Project Name and Due Date");
    } else {
      this.setState({ loadingStatus: true });
      const Project = {
        name: this.state.ProjectName,
        dueDate: this.state.dueDate,
        startDate: this.state.startDate,
        userId: this.state.userId,
        url: this.state.url
      };

      // Create the Project and redirect user to Project list
      ProjectManager.post(Project).then(() =>
        this.props.history.push("/projects")
      );
    }
  };

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <label htmlFor="ProjectName">Name</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="ProjectName"
                placeholder="Project Name"
              />

<label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                required
                onChange={this.handleFieldChange}
                id="startDate"
                
              />

              <label htmlFor="dueDate">Due Date</label>
              <input
                type="date"
                required
                onChange={this.handleFieldChange}
                id="dueDate"
                
              />
              <img className="uploadImage" src={this.state.url} alt=""/>
                <button onClick={this.uploadWidget.bind(this)} className="upload-button">
                    Add Image
                </button>
            </div>
            
          </fieldset>
        </form>
        <ActionBar saveItem={this.saveItem} cancelItem={this.cancelItem} />
      </>
    );
  }
}

export default ProjectForm;
