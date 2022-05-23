// dependencies
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const path = require("path");
const MongoStore = require("connect-mongo");

// setup app through express and define port env
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// setup session with MongoStore
app.use(
  session({
    secret: "TACO BELL ROX",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost/taco-bellz",
      ttl: 14 * 24 * 60 * 60,
      autoRemove: "native",
    }),
  })
);
app.get("/", (req, res) => {
  req.session.user = {
    uuid: "12234-2345-2323423",
  };
  req.session.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.send(req.session.user);
    }
  });
});

app.get("/end", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Session is destroyed");
    }
  });
});

// routing
app.use(require("./routes"));

// set paths to create build file
app.use(express.static(path.join(__dirname, "build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// connect db with mongoose and env
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/taco-bellz", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// set log for executed mongo queries
mongoose.set("debug", true);

// port connection listener
app.listen(PORT, () =>
  console.log(`
  =======================================================================
  🔥🔥  🌮  🔥🔥 Serving Up Deliciousness @ localhost:${PORT} 🔥🔥  🌮  🔥🔥
  =======================================================================
  `)
);
