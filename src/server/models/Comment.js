const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  subject: { type: String, required: true },
  date: { type: Date, required: true },
  allowed: { type: Boolean, required: true },
});

module.exports = model("Comment", schema);
