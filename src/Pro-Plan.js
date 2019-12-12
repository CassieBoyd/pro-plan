import React, { Component } from 'react'
import { Navbar, ListGroup } from 'react-bootstrap'
import './Pro-Plan.css'
import ApplicationViews from './ApplicationViews';
import { Link } from "react-router-dom"
import NavigationBar from './components/Nav/NavigationBar';
import ActionBar from './components/Nav/ActionBar';
class ProPlan extends Component {
    render() {
        return (
            <>
                <NavigationBar />
                <ApplicationViews />
            </>
        );
    }
}

export default ProPlan
