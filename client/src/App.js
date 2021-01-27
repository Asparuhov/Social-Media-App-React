import React, { useEffect, useState } from "react";
import classes from "./App.module.css";

import { io } from "socket.io-client";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
} from "react-router-dom";
import Login from "./containers/Authentication/Login/Login";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "./actions/actions";
import Account from "./containers/Main/Account/Account";
import Home from "./containers/Main/Home/Home";
import Register from "./containers/Authentication/Register/Register";
import searchLogo from "./assets/search.png";
import homeLogo from "./assets/home.png";
import msgLogo from "./assets/msg.png";
import profileLogo from "./assets/profile.png";
import Search from "./containers/Main/Search/Search";

function App(props) {
  useEffect(() => {
    axios
      .get("user")
      .then((res) => {
        props.setCurrentUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("getUsers")
      .then((res) => {
        props.setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Router>
      <div className={classes.Main}>
        <div className={classes.navbar}>
          <Link to="/home">
            <img className={classes.logo} src={homeLogo} alt="default" />
          </Link>
          <Link to="/search">
            <img className={classes.logo} src={searchLogo} alt="default" />
          </Link>
          <Link to="/messages">
            <img className={classes.logo} src={msgLogo} alt="default" />
          </Link>
          <Link to="/account">
            <img className={classes.logo} src={profileLogo} alt="default" />
          </Link>
        </div>
      </div>
      <Route path="/" exact>
        {props.isAuth ? <Redirect to="/home" /> : <Login />}
      </Route>
      <Route path="/home" exact>
        {props.isAuth ? <Home /> : <Login />}
      </Route>
      <Route path="/login" exact>
        {!props.isAuth ? <Login /> : <Home />}
      </Route>
      <Route path="/register" exact>
        {props.isAuth ? <Home /> : <Register />}
      </Route>
      <Route
        path="/messages"
        exact
        render={() => <h1 style={{ color: "white" }}>Messages</h1>}
      >
        {props.isAuth ? <h1>Messages</h1> : <Login />}
      </Route>
      <Route path="/search" exact>
        {props.isAuth ? <Search /> : <Login />}
      </Route>
      <Route path="/account" exact>
        {props.isAuth ? <Account /> : <Login />}
      </Route>
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
    setUsers: (usersList) => dispatch(actions.setUsers(usersList)),
  };
};
export default connect(mapStateToProps, toActions)(App);
