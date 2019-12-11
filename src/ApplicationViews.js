import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import ProjectCard from './components/Projects/ProjectCard'



class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        {/* <Route exact path="/" render={(props) => {
          return <Home />
        }} /> */}
        <Route path="/projects" render={(props) => {
          return <ProjectCard />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews