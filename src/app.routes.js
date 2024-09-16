const { Router } = require("express");
const {AuthRouters}= require('./modules/auth/auth.routes')
const {UserRouters}= require('./modules/user/user.routes')
const mainRouter = Router()
mainRouter.use('/auth' , AuthRouters)
mainRouter.use('/user' , UserRouters)

module.exports = mainRouter
