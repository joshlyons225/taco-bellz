import { User } from "../models";

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
};

export default userController;
