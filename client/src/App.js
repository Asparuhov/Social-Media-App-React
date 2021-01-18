import React, { useEffect, useState } from "react";
import "./App.css";
import { io } from "socket.io-client";
import Authentication from "./containers/Authentication/Authentication";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Main from "./containers/Main/Main";
function App() {
  const logged = false;
  return (
    <Router>
      <div className="App">
        <Route to='/'> {logged ? <Main /> : <Authentication />}</Route>
      </div>
    </Router>
  );
}

export default App;

/*
  const socket = io("http://localhost:4000/", {
    withCredentials: true,
    cors: {
      origin: "http://localhost:4000",
    },
  }); 
   const sendMessage = (msg) => {
    socket.emit("messageToServer", msg);
  };
  useEffect(()=>{
    socket.on("messageToClient", (msg) => {
      setMessages((prevMessage) => prevMessage.concat(msg));
    });
    return () => {
      socket.off('messageToClient')
    }
  },[]) */
