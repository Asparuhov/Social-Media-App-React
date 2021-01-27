import React from "react";
import classes from "./Follower.module.css";
import { Link } from "react-router-dom";
export default function Follower(props) {
  return (
    <div className={classes.Follower}>
      <img src={props.src} alt="default" />
      <Link>@{props.username}</Link>
      <button>Unfollow</button>
    </div>
  );
}
