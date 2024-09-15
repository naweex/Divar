const { Router } = require("express");
const {AuthRouters}= require('./modules/auth/auth.routes')

const mainRouter = Router()
mainRouter.use('/auth' , AuthRouters)

module.exports = mainRouter
