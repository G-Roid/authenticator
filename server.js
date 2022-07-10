require('dotenv').config()
const express = require('express')
const connectDB = require('./db')
const app = express()
const PORT = 8000


// Middleware
app.use(express.json());


connectDB()


const server = app.listen(PORT, () =>
  console.log(`Server Connected to port ${PORT}`)
);

process.on("unhandledRejection", (err) => {
    console.log(`An error occurred: ${err.message}`);
    server.close(() => process.exit(1));
  });