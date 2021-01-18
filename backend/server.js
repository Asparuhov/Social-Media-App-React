const app = require("express")();
const http = require("http").Server(app);
const cors = require("cors");

app.use(cors());
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

app.use("/test", (req, res) => {
  console.log("test works");
});

http.listen(4000, () => {
  console.log("listening on *:4000");
});
