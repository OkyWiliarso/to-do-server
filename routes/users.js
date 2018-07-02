const express = require('express')
const router = express.Router()
const {
  register,
  login,
  getUserProfile,
  fblogin,
  getWeather
} = require('../controllers/user.controller')
const {
  loginCheck
} = require('../middlewares/auth')

router
  .post('/register', register)
  .post('/login', login)
  .get('/get-profile/:id', getUserProfile)
  .post('/fblogin', fblogin)
  .get('/get-weather', getWeather)

module.exports = router
