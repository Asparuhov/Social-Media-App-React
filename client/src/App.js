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

import homeLogo from "./assets/home.png";
import msgLogo from "./assets/msg.png";
import profileLogo from "./assets/profile.png";

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
      <div className={classes.Main}>
        <div className={classes.navbar}>
          <Link to="/home">
            <img className={classes.logo} src={homeLogo} alt="default" />
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
      <Route path="/home" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/messages" exact render={() => <h1 style={{color: 'white'}}>Messages</h1>}/>
      <Route path="/account" exact component={Account} />
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
