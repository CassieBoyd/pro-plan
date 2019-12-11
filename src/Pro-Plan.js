import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import './Pro-Plan.css'
import ProjectCard from './components/Projects/ProjectCard';
class ProPlan extends Component {
    render() {
        return (
            <div>
                <Navbar bg="primary">Hello there</Navbar>
                <ProjectCard />
            </div>
        );
    }
}

export default ProPlan
