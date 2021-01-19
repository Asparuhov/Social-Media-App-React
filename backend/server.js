const express = require("express");
const cors = require("cors");
const User = require("./userModel");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
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
  socket.on("postToServer", (msg) => {
    io.emit("postToClient", msg);
  });
});

app.get("/user", authenticateToken, (req, res, next) => {
  res.send(req.user);
});

app.use("/register", async (req, res) => {
  const { name, username, email, password } = req.body;
  const salt = await bcrypt.genSalt();
  const hashedPass = await bcrypt.hash(password, salt);
  User.findOne({ email: email }).then((user) => {
    if (user) {
      res.send("bad");
      console.log("email already taken");
    } else {
      const newUser = new User({
        name,
        username,
        email,
        password: hashedPass,
      });
      newUser
        .save()
        .then(() => {
          res.send("success");
        })
        .catch((err) => console.log(err));
    }
  });
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }).then((user) => {
    if (!user) {
      console.log("Wrong email");
    } else {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) throw err;
        if (result) {
          const accessToken = jwt.sign(user.toJSON(), process.env.SECRET);
          res.json({ accessToken: accessToken });
        } else {
          console.log("wrong password");
        }
      });
    }
  });
});
function authenticateToken(req, res, next) {
  const authHeaders = req.headers["authorization"];
  const token = authHeaders && authHeaders.split(" ")[1];
  if (token === null) {
    res.status(401).send("Error");
  }
  jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) throw err;
    console.log(user);
    req.user = {
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
    };
    next();
  });
}
mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    http.listen(4000, () => {
      console.log("Connected to database");
    });
  })
  .catch((err) => console.log(err));
