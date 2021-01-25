import React, { useState } from "react";
import { connect } from "react-redux";
import classes from "./Account.module.css";
import { Redirect } from "react-router-dom";
import profileLogo from "../../../assets/profile.png";
const Account = (props) => {
  const [currentClicked, setCurrentClicked] = useState("");
  return (
    <div className={classes.Account}>
      <div className={classes.details}>
        <img src={profileLogo} alt="default" className={classes.profilePicture} />
        
        <p>ID: {props.user._id}</p>
        <p>Email: {props.user.email}</p>
        <p>Nickname: {props.user.username}</p>
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
