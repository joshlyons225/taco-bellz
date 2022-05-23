// dependencies
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// setup app through express and define port env
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// routing
app.use(require('./routes'));

// set paths to create build file
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// connect db with mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/taco-bellz', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// set log for executed mongo queries
mongoose.set('debug', true);

// port connection listener
app.listen(PORT, () =>
  console.log(`
  =======================================================================
  🔥🔥  🌮  🔥🔥 Serving Up Deliciousness @ localhost:${PORT} 🔥🔥  🌮  🔥🔥
  =======================================================================
  `)
);
