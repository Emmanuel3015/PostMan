const mongoose = require("mongoose");

// User schema definition
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
  },
});

// Export User model
module.exports = mongoose.model("User", userSchema);
