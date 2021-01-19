import React, { useState } from "react";
import Post from "../../../components/Post/Post";
import classes from "./Home.module.css";
import {connect} from 'react-redux';
const Home = (props) => {
  let [currentText, setCurrentText] = useState("");
  const post = (msg) => {
    console.log(msg);
  };
  return (
    <div className={classes.home}>
      <div className={classes.createPost}>
        <input
          type="text"
          placeholder="Whats on your mind?"
          onChange={(e) => setCurrentText(e.target.value)}
        />
        <button onClick={() => post(currentText)}>Post</button>
      </div>
      <div className={classes.posts}>
        <Post senderName='Kristiyan' senderUsername='@krismataa' message={'Kvo praite be'}/>
      </div>
    </div>
  );
};

export default Home;
