const router = require("express").Router();

const {
  addComment,
  addReply,
  removeComment,
  removeReply,
} = require("../../controllers/comment-controller");

// add comment to menu item
router.route("/:menuId").post(addComment);

// add reply and delete comment
router.route("/menuId/:commentId").put(addReply).delete(removeComment);

// delete reply
router.route("/menuId/:commentId/:replyId").delete(removeReply);

// export this route to index
module.exports = router;
