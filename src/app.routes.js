const { Router } = require("express");
const {AuthRouters}= require('./modules/auth/auth.routes')
const {UserRouters}= require('./modules/user/user.routes')
const {CategoryRouter} = require('./modules/category/category.routes')
const {OptionRoutes} = require('./modules/option/option.routes')

const mainRouter = Router()
mainRouter.use('/auth' , AuthRouters)
mainRouter.use('/user' , UserRouters)
mainRouter.use('/category' ,CategoryRouter)
mainRouter.use('/option' ,OptionRoutes)
mainRouter.get('/' , (req , res ) => {
    res.render('./pages/panel/dashboard.ejs')
})

module.exports = mainRouter


