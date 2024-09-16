const {Router} = require('express');
const userController = require('./user.controller')
const router = Router();
const Authorization = require('../../common/guard/authorization.guard')

router.get('/whoami' ,Authorization , userController.whoami)

module.exports = {
    UserRouters : router
}