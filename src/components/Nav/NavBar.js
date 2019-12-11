import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  render(){

    return (
      <header>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/tasks">Tasks</Link></li>
            <li><Link className="nav-link" to="/purchases">Shop</Link></li>
            <li>Pics</li>
            <li>Links</li>
            <li>Supplies</li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default NavBar;