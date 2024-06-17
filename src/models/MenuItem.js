// import { Schema, model, models } from "mongoose";

// const MenuItemSchema = new Schema(
//   {
//     image: { type: String },
//     name: { type: String },
//     description: { type: String },
//     basePrice: { type: Number },
//   },
//   { timestamps: true }
// );

import mongoose, { model, models, Schema } from "mongoose";

const MenuItemSchema = new Schema(
  {
    image: { type: String },
    name: { type: String },
    description: { type: String },
    //   category: {type: mongoose.Types.ObjectId},
    basePrice: { type: Number },
    //   sizes: {type:[ExtraPriceSchema]},
    //   extraIngredientPrices: {type:[ExtraPriceSchema]},
  },
  { timestamps: true }
);

export const MenuItem = models?.MenuItem || model("MenuItem", MenuItemSchema);
