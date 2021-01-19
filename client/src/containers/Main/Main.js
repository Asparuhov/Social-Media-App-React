import React from "react";
import classes from "./Main.module.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import homeLogo from "../../assets/home.png";
import msgLogo from "../../assets/msg.png";
import profileLogo from "../../assets/profile.png";
import Account from "./Account/Account";
import Home from "./Home/Home";
import { connect } from "react-redux";
const Main = (props) => {
  return (
    <div className={classes.Main}>
      <div className={classes.navbar}>
        <Link to="/">
          <img className={classes.logo} src={homeLogo} alt="default" />
        </Link>
        <Link to="/messages">
          <img className={classes.logo} src={msgLogo} alt="default" />
        </Link>
        <Link to="/account">
          <img className={classes.logo} src={profileLogo} alt="default" />
        </Link>
      </div>
      <Route path="/" exact>
        {props.isAuth ? <Home /> : null}{" "}
      </Route>
      <Route
        path="/messages"
        render={() => <h1 style={{ color: "grey" }}>Messages</h1>}
      />
      <Route path="/account" exact component={Account} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuth,
  };
};
export default connect(mapStateToProps)(Main);

//main color: rgb(0, 255, 115)
