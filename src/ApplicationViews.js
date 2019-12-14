import { Route } from "react-router-dom";
import React, { Component } from "react";
import ProjectList from "./components/Projects/ProjectList";
import ProjectForm from "./components/Projects/ProjectForm";
import ProjectDetail from "./components/Projects/ProjectDetails";
import ProjectEditForm from "./components/Projects/ProjectEditForm";
import TaskForm from "./components/Tasks/TaskForm";
import TaskList from "./components/Tasks/TaskList";
import TaskDetail from "./components/Tasks/TaskDetails";
class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
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
          exact
          path="/projects/:projectId(\d+)"
          render={props => {
            // Pass the projectId to the projectDetailComponent
            return (
              <ProjectDetail
                projectId={parseInt(props.match.params.projectId)}
                {...props}
              />
            );
          }}
        />
        <Route
          path="/projects/:projectId(\d+)/edit"
          render={props => {
            return <ProjectEditForm {...props} />;
          }}
        />

        {/* ******************TASK ROUTES************************ */}
        {/* Display all tasks associated with a project */}
        <Route
          exact
          path="/projects/:projectId(\d+)/tasks"
          render={props => {
            return (
              <TaskList
                {...props}
                projectId={parseInt(props.match.params.projectId)}
              />
            );
          }}
        />

        <Route
          exact
          path="/projects/:projectId(\d+)/tasks/new"
          render={props => {
            return (
              <TaskForm
                {...props}
                projectId={parseInt(props.match.params.projectId)}
              />
            );
          }}
        />
        <Route
          exact
          path="/projects/:projectId(\d+)/tasks/:taskId(\d+)"
          render={props => {
            // Pass the taskId to the taskDetailComponent
            return (
              <TaskDetail
                projectId={parseInt(props.match.params.projectId)}
                taskId={parseInt(props.match.params.taskId)}

                {...props}
              />
            );
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
