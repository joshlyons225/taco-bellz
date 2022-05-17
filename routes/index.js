// use express router function
const router = require("express").Router();

// import api routes
const apiRoutes = require("./api");

// add /api prefix to all imported routes via the api directory
router.use("/api", apiRoutes);

// kickback error message for false route requests
router.use((req, res) => {
  res.status(404).send("<h1>😝 404 Error!</h1>");
});

module.exports = router;
