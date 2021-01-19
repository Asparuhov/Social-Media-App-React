import React from "react";
import classes from "./Post.module.css";
import icon from "../../assets/icon.png";
export default function Post(props) {
  return (
    <div className={classes.post}>
      <div className={classes.header}>
        <img src={icon} alt="default" className={classes.image} />
        <p className={classes.senderName}>{props.senderName}</p>
        <p className={classes.senderUsername}>@{props.senderUsername}</p>
        <p className={classes.message}>{props.message}</p>
        <p className={classes.date}>{new Date().toLocaleTimeString("it-IT")}</p>
      </div>
    </div>
  );
}
