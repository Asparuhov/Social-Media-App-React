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
    origin: "http://localhost:3000/",
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

app.post("/addToFriendList", (req, res) => {
  const user = req.body.user;
  User.findByIdAndUpdate(
    user._id,
    { $push: { friendsList: [user] } },
    { new: true },
    (result, err) => {
      if (err) throw err;
      if (result) console.log("success");
    }
  );
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
//search for a user
app.post("/search", (req, res) => {
  const username = req.body.username;
  console.log(req.body);
  User.find({ username: username }, (err, user) => {
    if (err) throw err;
    if (user) {
      res.send(user);
    } else {
      res.send("not found");
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
          const accessToken = jwt.sign(
            user.toJSON(),
            "29901210fb033a60fcf5ccb65fe9f5662aabe7b376df9f29055a28a22c53d818a70350f7353c8811296c06817642863580c408ba7c26d98262106aa0fed2ff93"
          );
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
  jwt.verify(
    token,
    "29901210fb033a60fcf5ccb65fe9f5662aabe7b376df9f29055a28a22c53d818a70350f7353c8811296c06817642863580c408ba7c26d98262106aa0fed2ff93",
    (err, user) => {
      if (err) throw err;
      req.user = {
        _id: user._id,
        username: user.username,
        email: user.email,
      };
      next();
    }
  );
}
//get users
app.get("/getUsers", (req, res) => {
  User.find({}, (err, users) => {
    if (err) throw err;
    if (users) {
      res.send(users);
    }
  });
});

mongoose
  .connect(
    "mongodb+srv://Chris:Krisi0143171864a@cluster1.exqef.mongodb.net/?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    http.listen(process.env.PORT || 4000, () => {
      console.log("Connected to database");
    });
  })
  .catch((err) => console.log(err));
