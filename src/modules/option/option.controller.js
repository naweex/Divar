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
        const {category} = req.params;
        const options = await this.#service.findByCategoryId(category)
        return res.json(options)

    } catch (error) {
        next(error)
    }

}
async findById (req , res , next){
    try {
        const {id} = req.params;
        const option = await this.#service.findById(id)
        return res.json(option)
    } catch (error) {
        next(error)
    }

}
async findByCategorySlug(req , res , next){
    try {
        const {slug} = req.params;
        const options = await this.#service.findByCategorySlug(slug)
        return res.json(options)
    } catch (error) {
        next(error)
    }

}
async find (req , res , next){
    try {
        const options = await this.#service.find();
        return res.json(options)

    } catch (error) {
        next(error)
    }

}
}
module.exports = new OptionController();