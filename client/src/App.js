import React, { useEffect, useState } from "react";
import "./App.css";
import { io } from "socket.io-client";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
} from "react-router-dom";
import Main from "./containers/Main/Main";
import Login from "./containers/Authentication/Login/Login";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "./actions/actions";
import Account from "./containers/Main/Account/Account";
import Home from "./containers/Main/Home/Home";

function App(props) {
  useEffect(() => {
    axios
      .get("user")
      .then((res) => {
        props.setCurrentUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Router>
      <Route path="/">{props.isAuth ? <Main /> : <Login />}</Route>
    </Router>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    isAuth: state.isAuth,
  };
};
const toActions = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(actions.setCurrentUser(user)),
  };
};
export default connect(mapStateToProps, toActions)(App);
