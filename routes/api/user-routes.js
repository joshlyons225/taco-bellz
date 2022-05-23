const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  createLogin,
} = require("../../controllers/user-controller");

// get all users and create user
router.route("/").get(getAllUsers).post(createUser);

// get users by id route and update and delete users
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// create login for user
router.route("/login").post(createLogin);

// export this route to index
module.exports = router;
