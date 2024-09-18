const {Router} = require('express')
const CategoryController = require('./category.controller')
const router = Router()

router.post('/' , CategoryController.create)
router.get('/' , CategoryController.find)
module.exports = {
    CategoryRouter : router
}