import React from "react";
import Register from "./Register/Register";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Login from "./Login/Login";
const Authentication = (props) => {
  return (
    <Router>
      <div></div>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </Router>
  );
};

export default Authentication;
