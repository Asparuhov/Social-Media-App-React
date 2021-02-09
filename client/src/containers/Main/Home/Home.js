import React, { useState, useEffect } from "react";
import Post from "../../../components/Post/Post";
import classes from "./Home.module.css";
import { connect } from "react-redux";
import * as actions from "../../../actions/actions";
import { io } from "socket.io-client";
const Home = (props) => {
  let [currentText, setCurrentText] = useState("");
  return (
    <div className={classes.home}>
      <div className={classes.createPost}>
        <input
          type="text"
          placeholder="Whats on your mind?"
          onChange={(e) => setCurrentText(e.target.value)}
          value={currentText}
        />
        <button
          onClick={() => {
            setCurrentText("");
          }}
        >
          Post
        </button>
      </div>
      <div className={classes.posts}>
        {[...props.posts].reverse().map((post) => {
          return (
            <Post
              senderName={post.name}
              senderUsername={post.username}
              message={post.message}
            />
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
    posts: state.posts,
  };
};
const toActions = (dispatch) => {
  return {
    addPost: (post) => dispatch(actions.addPost(post)),
  };
};
export default connect(mapStateToProps, toActions)(Home);


