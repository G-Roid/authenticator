require('dotenv').config()
const express = require('express')
const connectDB = require('./db')
const app = express()
const PORT = 8000

connectDB()

// Middleware
app.use(express.json());
app.use('/api/Auth', require('./Auth/Route'))


const server = app.listen(PORT, () =>
  console.log(`Server Connected to port ${PORT}`)
);

process.on("unhandledRejection", (err) => {
    console.log(`An error occurred: ${err.message}`);
    server.close(() => process.exit(1));
  });