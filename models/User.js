const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  Name: {
    type: String,
    // required: true,
  },
  Mobile: {
    type: Number,
    // required: true,
  },
  Hometown: {
    type: String,
    // required: true,
  },
  Current_City: {
    type: String,
    // required: true,
  },
},
{ timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
