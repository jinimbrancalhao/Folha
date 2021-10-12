const Router = require('express').Router()
const controller = require('../controllers/MenuController')

Router.get('/', controller.GetMenu)
Router.get('/appetizers', controller.GetAppetizers)
Router.get('/entrees', controller.GetEntrees)
Router.get('/desserts', controller.GetDesserts)
Router.get('/drinks', controller.GetDrinks)

module.exports = Router
