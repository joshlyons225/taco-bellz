const { Schema, model } = require("mongoose");

const MenuSchema = new Schema(
  {
    itemName: {
      type: String,
      required: "Name is required, baller!",
      trim: true,
    },
    createdBy: {
      type: String,
      required: "Be proud of your creation. Give us your name.",
      trim: true,
    },
    category: {
      type: String,
      required: "You have to pick a category to ride this train.",
      enum: ["Taco", "Burrito", "Specialty, Other"],
      default: "Other",
    },
    toppings: [],
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
const MenuItem = model("MenuItem", MenuSchema);

// export the MenuItem model
export default MenuItem;
