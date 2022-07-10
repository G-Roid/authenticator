require('dotenv').config()
const Mongoose = require("mongoose")
const RemoteDB = process.env.DB_STRING
const connectDB = async () => {
  await Mongoose.connect(RemoteDB)
  .then(client => {
    console.log("MongoDB Connected")
  })
}
module.exports = connectDB