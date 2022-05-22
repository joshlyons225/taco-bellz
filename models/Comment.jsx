const { Schema, model, Types } = require("mongoose");

// create Reply Schema
const ReplySchema = new Schema(
  {
    // create custom reply id
    replyId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    replyBody: {
      type: String,
      required: "Type something- your thoughts are worthy!",
      minlength: 1,
      maxlength: 280,
      trim: true,
    },
    username: {
      type: String,
      required: "Don't say a word if you're too afraid to leave your name.",
    },
  },
  {
    // add getters
    toJSON: {
      getters: true,
    },
  }
);

// create Comment Schema
const CommentSchema = new Schema(
  {
    commentText: {
      type: String,
      required: "I sure hope this is important.",
      minlength: 1,
      maxlength: 280,
    },
    username: {
      type: String,
      required: "Don't say a word if you're too afraid to leave your name.",
    },
    // call Reply Schema
    replies: [ReplySchema],
  },
  {
    // add virtuals and getters
    toJSON: {
      virtuals: true,
      getters: true,
    },
    // omit auto-generated id
    id: false,
  }
);

// pull all replies to comments
CommentSchema.virtual("replyCount").get(function () {
  return this.replies.length;
});

// define Comment model
const Comment = model("Comment", CommentSchema);

// export Comment model
module.exports = Comment;
