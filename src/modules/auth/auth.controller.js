const authService = require("./auth.service")

class AuthController {
    #service
    constructor(){
        this.#service = authService
    }
   async sendOTP(req , res , next) {
        try {
        
        } catch (error) {
        next(error)
        }
   }
   async checkOTP(req , res , next) {
        try {
        
        } catch (error) {
        next(error)
        }
   }
   async logout(req , res , next) {
        try {
        
        } catch (error) {
        next(error)
        }
    }
}

module.exports = new AuthController();