const express = require('express')
const router = new express.Router()
const userController = require('../Controller/userController')
const projectController = require('../Controller/projectController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')



// register api

router.post('/user/register',userController.register)


// Login api

router.post('/user/login',userController.login)


// Add Project

router.post('/projects/add',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProjects)


// getUserProjects

router.get('/user/allProjects',jwtMiddleware,projectController.allUserProjects)


// getAllProjects

router.get('/projects/all',jwtMiddleware,projectController.getAllProjects)


// getHomeProjects

router.get('/projects/homeProjects',projectController.getHomeProjects)

// editProjects

router.put('/projects/edit/:id',jwtMiddleware,multerConfig.single('projectImage'),projectController.editProjectController)

// deleteProjects

router.delete('/projects/remove/:id',jwtMiddleware,projectController.deleteProjectController)


// export router
module.exports=router