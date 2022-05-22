const { MenuItem } = require("../models");

const menuController = {
  // get all menu items
  getAllMenu(req, res) {
    MenuItem.find({})
      .populate({
        path: "comments",
        select: "-__v",
      })
      .select("-__v")
      // sort results in descending order
      .sort({ _id: -1 })
      .then((dbTacoBellData) => res.json(dbTacoBellData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get menu item by id
  getMenuById({ params }, res) {
    MenuItem.findOne({ _id: params.id })
      .populate({
        path: "comments",
        select: "-__v",
      })
      .select("-__v")
      .then((dbTacoBellData) => {
        if (!dbTacoBellData) {
          res
            .status(404)
            .json({ message: "No menu item with that ID, player" });
          return;
        }
        res.json(dbTacoBellData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // create menu item
  createMenuItem({ body }, res) {
    MenuItem.create(body)
      .then((dbTacoBellData) => res.json(dbTacoBellData))
      .catch((err) => res.status(400).json(err));
  },

  // update menu item by id
  updateMenuItem({ params, body }, res) {
    MenuItem.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbTacoBellData) => {
        if (!dbTacoBellData) {
          res
            .status(404)
            .json({ message: "No menu item with that id, player" });
          return;
        }
        res.json(dbTacoBellData);
      })
      .catch((err) => res.stauts(400).json(err));
  },

  // delete menu item
  deleteMenuItem({ params }, res) {
    MenuItem.findOneAndDelete({ _id: params.id })
      .then((dbTacoBellData) => {
        if (!dbTacoBellData) {
          res
            .status(404)
            .json({ message: "No menu item with that id, player" });
          return;
        }
        res.json(dbTacoBellData);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = menuController;
