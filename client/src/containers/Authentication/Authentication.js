import React from "react";
import Register from "./Register/Register";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Login from "./Login/Login";
import { connect } from "react-redux";
import Home from "../Main/Home/Home";
const Authentication = (props) => {
  return (
    <Router>
      <div></div>
      <Route path="/"> {!props.isAuth ? <Login /> : <Home />}</Route>
      <Route path="/register" exact component={Register} />
    </Router>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuth,
  };
};
export default connect(mapStateToProps)(Authentication);
