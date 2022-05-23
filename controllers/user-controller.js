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
  createUser(req, res) {
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
      .then((dbTacoBellData) => {
        req.session.save(() => {
          req.session.user_id = dbTacoBellData.id;
          req.session.username = dbTacoBellData.username;
          req.session.loggedIn = true;
          res.json(dbTacoBellData);
        });
      })
      .catch((err) => res.status(500).json(err));
  },

  // create login for user
  createLogin(req, res) {
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((dbTacoBellData) => {
      if (!dbTacoBellData) {
        res.status(400).json({ message: "No user with that email address!" });
        return;
      }
      // valid password check
      const validPassword = dbTacoBellData.checkPassword(req.body.password);
      if (!validPassword) {
        res.status(400).json({ message: "Incorrect password!" });
        return;
      }
      // save info for users with valid password
      req.session.save(() => {
        req.session.user_id = dbTacoBellData.id;
        req.session.username = dbTacoBellData.username;
        req.ession.loggedIn = true;
        res.json({ user: dbTacoBellData, message: "You are now logged in!" });
      });
    });
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
