const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  familyName: String,
  givenName: String,
  email: String,
  googleId: String,
  imageUrl: String,
  name: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
