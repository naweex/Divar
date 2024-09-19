const autoBind = require("auto-bind");
const OptionModel = require('./option.model');
const CategoryModel = require('./../category/category.model');
const createHttpError = require("http-errors");
const {OptionMessage} = require('./option.message');
const { default: slugify } = require("slugify");

class OptionService {
    #model
    #categoryModel
    constructor(){
        autoBind(this)
        this.#model = OptionModel
        this.#categoryModel = CategoryModel
    }
    async find(){
        
    }
    async create(optionDto){
      const category = await this.checkExistById(optionDto.category);
      optionDto.category = category._id
      optionDto.key = slugify(optionDto.key,{trim : true , replacement : '_' , lower : true});
      await this.alreadyExistByCategoryAndKey(optionDto.key , category._id)
      if(optionDto?.enum && typeof optionDto.enum === 'string'){
            optionDto.enum = optionDto.enum.split(',')
      }else if(Array.isArray(optionDto.enum)) optionDto.enum = [];
      const option = await this.#model.create(optionDto)
      return option;
    }
    async checkExistById(id){
        const category = await this.#categoryModel.findById(id)
        if(!category) throw new createHttpError.NotFound(OptionMessage.NotFound)
            return category;
    }
    async alreadyExistByCategoryAndKey(key , category){
        const isExist = await this.#model.findOne({category , key})
        if(isExist) throw new createHttpError.Conflict(OptionMessage.AlreadyExist)
            return null;
    }
    
}

module.exports = new OptionService();