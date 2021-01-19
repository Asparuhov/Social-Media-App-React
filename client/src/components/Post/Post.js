import React from "react";
import classes from "./Post.module.css";
import icon from "../../assets/icon.png";
export default function Post(props) {
  const date = new Date();
  return (
    <div className={classes.post}>
    
        <img src={icon} alt="default" className={classes.image} />
        <p className={classes.senderName}>{props.senderName}</p>
        <p className={classes.senderUsername}>@{props.senderUsername}</p>
        <p className={classes.message}>{props.message}</p>
        <p className={classes.date}>{date.toLocaleTimeString("it-IT")}</p>

    </div>
  );
}
