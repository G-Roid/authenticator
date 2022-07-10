const express = require('express')
const { model } = require('mongoose')
const router = express.Router()
const {register} = require('./Auth')
router.route('./register').post(register)
model.exports = router