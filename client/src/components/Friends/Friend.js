import React from "react";
import classes from "./Friend.module.css";
import { Link } from "react-router-dom";
export default function Friend(props) {
  return (
    <div className={classes.Friend}>
      <img src={props.src} alt="default" />
      <Link>@{props.username}</Link>
      <button>Unfriend</button>
    </div>
  );
}
