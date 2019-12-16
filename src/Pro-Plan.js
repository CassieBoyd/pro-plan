import React, { Component } from 'react'
import './Pro-Plan.css'
import ApplicationViews from './ApplicationViews';
import NavigationBar from './components/Nav/NavigationBar';
class ProPlan extends Component {
    isAuthenticated = () => localStorage.getItem("credentials") !== null

    setUser = authObj => {
        localStorage.setItem("credentials", JSON.stringify(authObj))
        this.setState({
          user: this.isAuthenticated(),
        })
      }
    
    render() {
        return (
            <>
                <NavigationBar />
                <ApplicationViews setUser = {this.setUser}/>
            </>
        );
    }
}

export default ProPlan
