const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
  name:{
    type: String,
  },
  age:{
    type: Number,
  },
  email:{
    type: String,
  }
})
var UserModel = mongoose.model("users",UserSchema)
module.exports = UserModel