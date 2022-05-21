// dependencies
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// express/port
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// routing
app.use(require("./routes"));

// set paths
app.use(express.static(path.join(__dirname, "build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// connect db with mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/taco-bellz", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// use this to log mongo queries being executed!
mongoose.set("debug", true);

// port listener
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
