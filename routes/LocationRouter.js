const Router = require('express').Router()
const controller = require('../controllers/LocationController')

Router.get('/', controller.GetLocations)
Router.get('/:state', controller.GetLocationByState)

module.exports = Router
