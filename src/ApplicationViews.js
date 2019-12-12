import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import ProjectList from './components/Projects/ProjectList'



class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        {/* <Route exact path="/" render={(props) => {
          return <ProjectCard />
        }} /> */}
        <Route exact path="/" render={(props) => {
          return <ProjectList />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews