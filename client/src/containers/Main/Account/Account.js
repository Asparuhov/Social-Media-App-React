import React, { useState } from "react";
import { connect } from "react-redux";
import classes from "./Account.module.css";
import { Redirect } from "react-router-dom";
import profileLogo from "../../../assets/profile.png";
import Friends from "../../../components/Friends/Friend";
const Account = (props) => {
  const [currentClicked, setCurrentClicked] = useState("details");
  return (
    <div className={classes.Account}>
      <div className={classes.details}>
        <img
          src={profileLogo}
          alt="default"
          className={classes.profilePicture}
        />
        <p className={classes.tag}>@{props.user.username}</p>
        <div className={classes.navbar}>
          <button onClick={() => setCurrentClicked("details")}>Details</button>
          <button onClick={() => setCurrentClicked("friends")}>
            Friends
          </button>
          <button
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Logout
          </button>
        </div>
        {currentClicked === "details" ? <h1>Details</h1> : null}
        {currentClicked === "friends" ? <Friends /> : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(Account);
