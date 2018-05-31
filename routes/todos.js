const express = require('express')
const router = express.Router()
const {
  addTask,
  doneTask,
  taskList,
  deleteTask
} = require('../controllers/todo.controller')
const {
  loginCheck
} = require('../middlewares/auth')

router
  .post('/add', loginCheck, addTask)
  .put('/done/:id', loginCheck, doneTask)
  .get('/list', loginCheck, taskList)
  .delete('/delete/:id', loginCheck, deleteTask)

module.exports = router
