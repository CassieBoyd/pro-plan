import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import ProPlan from "./Pro-Plan";
import { BrowserRouter as Router } from "react-router-dom";
// import Home from './components/ProjectsMain/Projects';

{/* <script src="//widget.cloudinary.com/global/all.js" type="text/javascript"></script> */}


localStorage.setItem("userId", 1)

ReactDOM.render(
  <Router>
    <ProPlan />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
