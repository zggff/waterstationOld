const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  goods: { type: String, required: true },
  quantity: { type: Number, required: true },
  additional: { type: String, required: false },
  date: { type: Date, required: true },
});

module.exports = model("Order", schema);
