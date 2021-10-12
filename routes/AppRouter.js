const Router = require('express').Router()

const CommentRouter = require('./CommentRouter')
// const LocationRouter = require('./LocationRouter')
const MenuRouter = require('./MenuRouter')

Router.use('/menu', MenuRouter)
// Router.use('/location', LocationRouter)
Router.use('/comment', CommentRouter)

module.exports = Router
