const { Schema, model } = require("mongoose");

const SauceSchema = new Schema(
  {
    category: {
      type: String,
      required: "You have to pick a category to ride this train.",
      enum: ["Mild", "Medium", "Fire", "Diablo"],
      default: "Mild",
    },
    createdBy: {
      type: String,
      required: "Be proud of your creation. Give us your name.",
      trim: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// create MenuItem model using the above schema
const Sauce = model("Sauce", SauceSchema);

// export the MenuItem model
export default Sauce;
