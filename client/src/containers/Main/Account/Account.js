import React, { useState } from "react";
import { connect } from "react-redux";
import classes from "./Account.module.css";
import { Redirect } from "react-router-dom";
import profileLogo from "../../../assets/profile.png";
import Followers from '../../../components/Followers/Followers';
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
          <button onClick={() => setCurrentClicked("following")}>
            Following
          </button>
          <button onClick={() => setCurrentClicked("followers")}>
            Followers
          </button>
        </div>
        {currentClicked === "details" ? <h1>Details</h1>: null}
        {currentClicked === "following" ? <h1>following</h1> : null}
        {currentClicked === "followers" ? <Followers /> : null}
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
