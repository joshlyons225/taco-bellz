const { Comment, MenuItem } = require("../models");

const commentController = {
  addComment({ params, body }, res) {
    Comment.create(body)
      .then(({ _id }) => {
        return MenuItem.findOneAndUpdate(
          { _id: params.menuId },
          { $push: { comments: _id } },
          { new: true }
        );
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
      .catch((err) => res.json(err));
  },

  // attach replies to their respective comments
  addReply({ params, body }, res) {
    Comment.findOneAndUpdate(
      { _id: params.commentId },
      { $push: { replies: body } },
      { new: true, runValidators: true }
    )
      .then((dbTacoBellData) => {
        if (!dbTacoBellData) {
          res
            .status(404)
            .josn({ message: "No menu item with that id, player" });
          return;
        }
        res.json(dbTacoBellData);
      })
      .catch((err) => res.json(err));
  },

  // remove reply to comment
  removeReply({ params }, res) {
    Comment.findOneAndUpdate(
      { _id: params.commentId },
      { $pull: { replies: { replyId: params.replyId } } },
      { new: true }
    )
      .then((dbTacoBellData) => res.json(dbTacoBellData))
      .catch((err) => res.json(err));
  },

  // remove comment
  removeComment({ params }, res) {
    Comment.findOneAndDelete({ _id: params.commentId })
      .then((deletedComment) => {
        if (!deletedComment) {
          return res
            .status(404)
            .json({ message: "No comment with that id, Cindy Lou." });
        }
        return MenuItem.findOneAndUpdate(
          { _id: params.menuId },
          { $pull: { comments: params.commentId } },
          { new: true }
        );
      })
      .then((dbTacoBellData) => {
        if (!dbTacoBellData) {
          res
            .stauts(404)
            .json({ message: "No menu item with that id, champion." });
          return;
        }
        res.json(dbTacoBellData);
      })
      .catch((err) => res.json(err));
  },
};

module.exports = commentController;
