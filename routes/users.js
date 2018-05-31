const express = require('express')
const router = express.Router()
const {
  register,
  login,
  getUserProfile
} = require('../controllers/user.controller')
const {
  loginCheck
} = require('../middlewares/auth')

router
  .post('/register', register)
  .post('/login', login)
  .get('/get-profile/:id', loginCheck, getUserProfile)

module.exports = router;
