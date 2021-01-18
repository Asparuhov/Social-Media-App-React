import React, { useState } from "react";
import classes from "./Register.module.css";
import axios from "axios";
const Register = (props) => {
  let [registerInfo, setRegisterInfo] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const register = () => {
    axios
      .post("register", registerInfo)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className={classes.Register}>
      <h1>Register</h1>
      <input
        autoComplete="off"
        type="text"
        placeholder="Full name"
        onChange={(e) =>
          setRegisterInfo({ ...registerInfo, name: e.target.value })
        }
      />
      <input
        autoComplete="off"
        type="text"
        placeholder="Username"
        onChange={(e) =>
          setRegisterInfo({ ...registerInfo, username: e.target.value })
        }
      />
      <input
        autoComplete="off"
        type="email"
        placeholder="Email"
        onChange={(e) =>
          setRegisterInfo({ ...registerInfo, email: e.target.value })
        }
      />
      <input
        autoComplete="off"
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setRegisterInfo({ ...registerInfo, password: e.target.value })
        }
      />
      <button onClick={register}>Register</button>
      <p style={{ color: "grey" }}>
        Already have an account? 
         <a href="/" style={{ color: "rgb(0, 255, 115)", textDecoration:'none' }}>
           Login
        </a>
      </p>
    </div>
  );
};
export default Register;
