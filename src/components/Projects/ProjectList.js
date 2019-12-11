import React, { Component } from 'react'
    //import the components we will need
    import ProjectCard from './ProjectCard'
    import ProjectManager from '../modules/ProjectManager'

    class ProjectList extends Component {
        state = {
            projects: [],
        }

    componentDidMount(){
        console.log("Project List: ComponentDidMount");
     
        ProjectManager.getAll()
        .then((projects) => {
            this.setState({
                projects: projects
            })
        })
    }

    render(){
        console.log("Project List: Render");

        return(
            <div className="container-cards">
                {this.state.projects.map(project => <ProjectCard key={project.id}project={project}/>)}
            </div>
        )
    }
}

export default ProjectList