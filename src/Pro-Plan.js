import React, { Component } from 'react'
import './Pro-Plan.css'
import ApplicationViews from './ApplicationViews';
import NavigationBar from './components/Nav/NavigationBar';
class ProPlan extends Component {

state = {
    user: false
}

    isAuthenticated = () => localStorage.getItem("credentials") !== null

    setUser = authObj => {
        localStorage.setItem("credentials", JSON.stringify(authObj))
        localStorage.setItem("creduserentials", JSON.stringify(authObj))
        this.setState({
          user: this.isAuthenticated(),
        })
      }

      clearUser = () => {
        localStorage.removeItem("credentials")
        this.setState({
          user: this.isAuthenticated()
        });
      }

      componentDidMount() {
        this.setState({
          user: this.isAuthenticated()
        })
      }
    
    render() {
        return (
            <>
                <NavigationBar clearUser = {this.clearUser} user={this.state.user}/>
                <ApplicationViews setUser = {this.setUser}/>
            </>
        );
    }
}

export default ProPlan
