const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const swaggerConfig = require('./src/config/swagger.config')
const mainRouter = require('./src/app.routes')
async function main() {
    const app = express()
    const port = process.env.PORT
    require('./src/config/mongoose.config')
    swaggerConfig(app)
    app.use(mainRouter)
    app.listen(3000 , () => {
        console.log(`server : http://localhost:${port}`);
        
    })    
}
main();