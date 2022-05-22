const { Schema, model } = require("mongoose");

// create User schema
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: "When you're strange... no one remembers your name.",
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //   regex validator
      match: [
        /.+@.+\..+/,
        "Enter a valid email address or you're gonna be picking out stoplights, bot.",
      ],
    },
    // refer to Comment model
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    // add virtuals and getters:
    toJSON: {
      virtuals: true,
      getters: true,
    },
    // omit id
    id: false,
  }
);

// define User model
const User = model("User", UserSchema);

// export User model
module.exports = User;
