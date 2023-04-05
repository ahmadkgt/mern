const express = require ("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://ahmadkgt:vpfAv7j0FUsdypkG@cluster0.iuq0el8.mongodb.net/mern?retryWrites=true&w=majority")

const UserModel = require('./models/Users')

app.get("/users", async (req, res)=>{
  const user = await UserModel.find();
  res.json(user)
})
app.listen("3001",()=>{
  console.log("server start")
})