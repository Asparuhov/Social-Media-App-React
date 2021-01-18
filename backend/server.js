const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  let messages = [];
  socket.on("messageToServer", (msg) => {
    io.emit("messageToClient", msg);
    console.log(msg);
  });
});

app.use("/register", (req, res) => {
  console.log(req.body);
});

http.listen(4000, () => {
  console.log("listening on *:4000");
});
