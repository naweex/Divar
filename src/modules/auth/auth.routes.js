const {Router} = require('express');
const authController = require('./auth.controller');
const router = Router();
const Authorization = require('../../common/guard/authorization.guard')
router.post('/send-otp' , authController.sendOTP)
router.post('/check-otp' , authController.checkOTP)
router.get('/logout' , Authorization , authController.logout)

module.exports = {
    AuthRouters : router
}