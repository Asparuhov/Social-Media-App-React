import React, { useState } from "react";
import classes from "./Register.module.css";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Login from "../Login/Login";
const Register = (props) => {
  let [registerInfo, setRegisterInfo] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  let [feedback, setFeedback] = useState("");
  const register = () => {
    axios
      .post("register", registerInfo)
      .then((res) => {
        if (res.data === "bad") {
          setFeedback("bad");
        } else {
          setFeedback("success");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={classes.Register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Full name"
        onChange={(e) =>
          setRegisterInfo({ ...registerInfo, name: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Username"
        onChange={(e) =>
          setRegisterInfo({ ...registerInfo, username: e.target.value })
        }
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) =>
          setRegisterInfo({ ...registerInfo, email: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setRegisterInfo({ ...registerInfo, password: e.target.value })
        }
      />
      {feedback === "bad" ? (
        <p style={{ color: "red" }}>Email already taken</p>
      ) : null}
      {feedback === "success" ? <Redirect to="/" /> : null}
      <button onClick={register}>Register</button>
      <p style={{ color: "grey" }}>
        Already have an account?
        <Link
          to="/"
          style={{ color: "rgb(0, 255, 115)", textDecoration: "none" }}
        >
          Login
        </Link>
      </p>
    </div>
  );
};
export default Register;
