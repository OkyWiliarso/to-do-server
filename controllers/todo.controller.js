const Todo = require('../models/todo.model')

module.exports = {
  addTask: function (req, res) {
    let task = new Todo({
      user: req.decoded.id,
      task: req.body.task
    })
    task.save()
    .then(response => {
      res.status(201).json({
        message: "task successfully added",
        response
      })
    })
    .catch(err => {
      res.status(400).json({
        message: "task creation failed, please try again",
        err
      })
    })
  },
  doneTask: function (req, res) {
    let { id } = req.params
    let { status } = req.body

    Todo.findOneAndUpdate({
      _id: id
    },{
      status
    }, (err, doneTask) => {
      if (err) {
        res.status(400).json({
          message: "can't update task",
          err
        })
      } else {
        res.status(201).json({
          message: "update task success",
          doneTask
        })
      }
    })
  },
  taskList: function (req, res) {
    Todo.find({
      user: req.decoded.id
    })
    .populate('user')
    .then(response => {
      res.status(200).json({
        message: "succes retrieved data",
        response
      })
    })
    .catch(err => {
      res.status(404).json({
        message: "data not found",
        err
      })
    })
  },
  deleteTask: function (req, res) {
    let { id } = req.params

    Todo.findOneAndRemove({
      _id: id
    },(err, response) => {
      if(err) {
        res.status(404).json({
          message: "data not found",
          err
        })
      } else {
        res.status(200).json({
          message: "delete data success"
        })
      }
    })
  }
}