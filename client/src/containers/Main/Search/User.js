import React from "react";
import classes from "./User.module.css";
import { Link } from "react-router-dom";
export default function User(props) {
  return (
    <div className={classes.user}>
      <img src={props.src} alt="default" />
      <Link>{props.username}</Link>
      <button>Add</button>
    </div>
  );
}
