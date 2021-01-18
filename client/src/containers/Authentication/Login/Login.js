import React, { useState } from "react";
import classes from "./Login.module.css";
import axios from "axios";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
const Login = (props) => {
  let [loginInfo, setloginInfo] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  let [feedback, setFeedback] = useState("");
  const login = () => {
    axios
      .post("login", loginInfo)
      .then((res) => {
          localStorage.setItem("token", res.data.accessToken);
          window.location.reload();
        /*  if (res.data === "bad") {
           
            
        } else {
          setFeedback("success");
        } */
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={classes.Login}>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setloginInfo({ ...loginInfo, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setloginInfo({ ...loginInfo, password: e.target.value })
        }
      />
      {/*  {feedback === "bad" ? (
        <p style={{ color: "red" }}>Email already taken</p>
      ) : null}
      {feedback === "success" ? (
        <p style={{ color: "green" }}>logined successfuly</p>
      ) : null} */}
      <button onClick={login}>login</button>
      <p style={{ color: "grey" }}>
        Already have an account?
        <Link
          to="/register"
          style={{ color: "rgb(0, 255, 115)", textDecoration: "none" }}
        >
          Register
        </Link>
      </p>
    </div>
  );
};
export default Login;
