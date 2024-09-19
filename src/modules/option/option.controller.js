const autoBind = require("auto-bind");
const optionService = require("./option.service");
const {OptionMessage}= require ('./option.message')
const HttpCodes = require('http-codes')
class OptionController {
    #service
    constructor(){
        autoBind(this)
        this.#service = optionService
    }
    async create (req , res , next){
        try {
            const {title , key , enum: list , guid , type , category} = req.body;
            await this.#service.create({title , key , enum: list , guid , type , category})
            return res.status(HttpCodes.CREATED).json({
                message : OptionMessage.Created
            })
      
            
        } catch (error) {
            next(error)
        }
    }
async findByCategoryId (req , res , next){
    try {

    } catch (error) {
        next(error)
    }

}
async findById (req , res , next){
    try {

    } catch (error) {
        next(error)
    }

}
async find (req , res , next){
    try {

    } catch (error) {
        next(error)
    }

}
}
module.exports = new OptionController();