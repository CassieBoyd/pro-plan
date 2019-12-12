import { Route } from "react-router-dom";
import React, { Component } from "react";
import ProjectList from "./components/Projects/ProjectList";
import ProjectForm from "./components/Projects/ProjectForm";
import ProjectDetail from "./components/Projects/ProjectDetails";
class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Route exact path="/" render={(props) => {
          return <ProjectCard />
        }} /> */}
        <Route
          exact
          path="/"
          render={props => {
            return <ProjectList {...props} />;
          }}
        />
        <Route
          exact
          path="/projects"
          render={props => {
            return <ProjectList {...props} />;
          }}
        />
        <Route
          exact
          path="/projects/new"
          render={props => {
            return <ProjectForm {...props} />;
          }}
        />
        <Route
          path="/projects/:projectId(\d+)"
          render={props => {
            // Pass the projectId to the projectDetailComponent
            return (
              <ProjectDetail projectId={parseInt(props.match.params.projectId)} {...props} />
            );
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
