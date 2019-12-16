import { Route } from "react-router-dom";
import React, { Component } from "react";
import ProjectList from "./components/Projects/ProjectList";
import ProjectForm from "./components/Projects/ProjectForm";
import ProjectDetail from "./components/Projects/ProjectDetails";
import ProjectEditForm from "./components/Projects/ProjectEditForm";
import TaskForm from "./components/Tasks/TaskForm";
import TaskList from "./components/Tasks/TaskList";
import TaskDetail from "./components/Tasks/TaskDetails";
import PurchaseList from "./components/Purchases/PurchaseList";
import PurchaseForm from "./components/Purchases/PurchaseForm";
import SupplyList from "./components/Supplies/SupplyList";
import SupplyForm from "./components/Supplies/SupplyForm";
import ReferenceList from "./components/References/ReferenceList";
import ReferenceForm from "./components/References/ReferenceForm";
import ReferenceDetail from "./components/References/ReferenceDetails";
import PurchaseDetail from "./components/Purchases/PurchaseDetails";
import SupplyDetail from "./components/Supplies/SupplyDetails";
import TaskEditForm from "./components/Tasks/TaskEditForm";
import PurchaseEditForm from "./components/Purchases/PurchaseEditForm";
import SupplyEditForm from "./components/Supplies/SupplyEditForm";
import ReferenceEditForm from "./components/References/ReferenceEditForm";
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
        <Route
          exact
          path="/projects/:projectId(\d+)/tasks/:taskId(\d+)/edit"
          render={props => {
            return (
              <TaskEditForm
                projectId={parseInt(props.match.params.projectId)}
                taskId={parseInt(props.match.params.taskId)}
                {...props}
              />
            );
          }}
        />

        {/* ******************PURCHASE ROUTES************************ */}
        {/* Display all purchases associated with a project */}
        <Route
          exact
          path="/projects/:projectId(\d+)/purchases"
          render={props => {
            return (
              <PurchaseList
                {...props}
                projectId={parseInt(props.match.params.projectId)}
              />
            );
          }}
        />

        {/*  */}
        <Route
          exact
          path="/projects/:projectId(\d+)/purchases/new"
          render={props => {
            return (
              <PurchaseForm
                {...props}
                projectId={parseInt(props.match.params.projectId)}
              />
            );
          }}
        />

        <Route
          exact
          path="/projects/:projectId(\d+)/purchases/:purchaseId(\d+)"
          render={props => {
            // Pass the purchaseId to the PurchaseDetail Component
            return (
              <PurchaseDetail
                projectId={parseInt(props.match.params.projectId)}
                purchaseId={parseInt(props.match.params.purchaseId)}
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/projects/:projectId(\d+)/purchases/:purchaseId(\d+)/edit"
          render={props => {
            return (
              <PurchaseEditForm
                projectId={parseInt(props.match.params.projectId)}
                purchaseId={parseInt(props.match.params.purchaseId)}
                {...props}
              />
            );
          }}
        />

        {/* ******************SUPPLY ROUTES************************ */}
        {/* Display all supplies associated with a project */}
        <Route
          exact
          path="/projects/:projectId(\d+)/supplies"
          render={props => {
            return (
              <SupplyList
                {...props}
                projectId={parseInt(props.match.params.projectId)}
              />
            );
          }}
        />

        <Route
          exact
          path="/projects/:projectId(\d+)/supplies/new"
          render={props => {
            return (
              <SupplyForm
                {...props}
                projectId={parseInt(props.match.params.projectId)}
              />
            );
          }}
        />

        <Route
          exact
          path="/projects/:projectId(\d+)/supplies/:supplyId(\d+)"
          render={props => {
            // Pass the supplyId to the SuppplyDetail Component
            return (
              <SupplyDetail
                projectId={parseInt(props.match.params.projectId)}
                supplyId={parseInt(props.match.params.supplyId)}
                {...props}
              />
            );
          }}
        />

        <Route
          exact
          path="/projects/:projectId(\d+)/supplies/:supplyId(\d+)/edit"
          render={props => {
            return (
              <SupplyEditForm
                projectId={parseInt(props.match.params.projectId)}
                supplyId={parseInt(props.match.params.supplyId)}
                {...props}
              />
            );
          }}
        />

        {/* ******************REFERENCE ROUTES************************ */}
        {/* Display all references associated with a project */}
        <Route
          exact
          path="/projects/:projectId(\d+)/references"
          render={props => {
            return (
              <ReferenceList
                {...props}
                projectId={parseInt(props.match.params.projectId)}
              />
            );
          }}
        />

        <Route
          exact
          path="/projects/:projectId(\d+)/references/new"
          render={props => {
            return (
              <ReferenceForm
                {...props}
                projectId={parseInt(props.match.params.projectId)}
              />
            );
          }}
        />
        <Route
          exact
          path="/projects/:projectId(\d+)/references/:referenceId(\d+)"
          render={props => {
            // Pass the referenceId to the ReferenceDetail Component
            return (
              <ReferenceDetail
                projectId={parseInt(props.match.params.projectId)}
                referenceId={parseInt(props.match.params.referenceId)}
                {...props}
              />
            );
          }}
        />

        <Route
          exact
          path="/projects/:projectId(\d+)/references/:referenceId(\d+)/edit"
          render={props => {
            return (
              <ReferenceEditForm
                projectId={parseInt(props.match.params.projectId)}
                referenceId={parseInt(props.match.params.referenceId)}
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
