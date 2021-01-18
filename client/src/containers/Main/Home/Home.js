import React, { useState } from "react";
import classes from "./Home.module.css";
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
    </div>
  );
};

export default Home;
