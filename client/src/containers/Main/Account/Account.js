import React, { useState } from "react";
import { connect } from "react-redux";
import classes from "./Account.module.css";
const Account = (props) => {
  const [currentClicked, setCurrentClicked] = useState("");
  return (
    <div className={classes.Account}>
      <div className={classes.navbar}>
        <button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Logout
        </button>

        <div className={classes.details}>
          <p>ID: {props.user._id}</p>
          <p>Email: {props.user.email}</p>
          <p>Nickname: {props.user.username}</p>
        </div>
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
