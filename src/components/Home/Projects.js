import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import ApplicationViews from '../../ApplicationViews'

class Home extends Component {
  render() {
    return (
        <Navbar bg="primary">Hello there</Navbar>
<ApplicationViews />
    )
  }
}

export default Home