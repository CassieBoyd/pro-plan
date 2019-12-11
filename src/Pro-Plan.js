import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import './Pro-Plan.css'
import ApplicationViews from './ApplicationViews';
import { Link, withRouter } from "react-router-dom"
class ProPlan extends Component {
    render() {
        return (
            <>
                <Navbar bg="primary"><ul className="container">
            <li><Link className="nav-link" to="/tasks">Tasks</Link></li>
            <li><Link className="nav-link" to="/purchases">Shop</Link></li>
            <li>Pics</li>
            <li>Links</li>
            <li>Supplies</li>
          </ul></Navbar>
                <ApplicationViews />
            </>
        );
    }
}

export default ProPlan
