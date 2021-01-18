import React, { useEffect, useState } from "react";
import "./App.css";
import { io } from "socket.io-client";
import Authentication from "./containers/Authentication/Authentication";
function App() {
  return (
    <div className="App">
      <Authentication />
    </div>
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
