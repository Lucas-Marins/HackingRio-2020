const express = require('express')
const routes = express.Router()

const  ClassesController = require('./controller/ClassController')
const StudentController = require('./controller/StudentController')


routes.get('/classes', ClassesController.index)
routes.post('/classes', ClassesController.create)

routes.get('/student', StudentController.index)
routes.post('/student', StudentController.create)

module.exports = routes;