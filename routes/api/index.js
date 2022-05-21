// set dependencies
const router = require("express").Router();
const commentRoutes = require("./comment-routes");
const userRoutes = require("./user-routes");

// set api endpoints
router.use("/comments", commentRoutes);
router.use("/users", userRoutes);

// export api routes
module.exports = router;
