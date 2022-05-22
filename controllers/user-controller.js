const { User } = require("../models");

const userController = {
  // get all users
  getAllUsers(req, res) {
    User.find({})
      .populate({
        path: "comments",
        select: "-__v",
      })
      .select("__v")
      .then((dbTacoBellData) => res.json(dbTacoBellData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //   get user by id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: "comments",
        select: "-__v",
      })
      .select("-__v")
      .then((dbTacoBellData) => res.json(dbTacoBellData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //   create user
  createUser({ body }, res) {
    User.create(body)
      .then((dbTacoBellData) => res.json(dbTacoBellData))
      .catch((err) => res.stauts(400).json(err));
  },

  // update user
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbTacoBellData) => {
        if (!dbTacoBellData) {
          res
            .status(404)
            .json({ message: "No user found with that ID. Sad face." });
          return;
        }
        res.json(dbTacoBellData);
      })
      .catch((err) => res.json(err));
  },

  // delete user
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then((dbTacoBellData) => {
        if (!dbTacoBellData) {
          res
            .status(404)
            .json({ message: "No user found with that ID. Sad face." });
          return;
        }
        res.json(dbTacoBellData);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = userController;
