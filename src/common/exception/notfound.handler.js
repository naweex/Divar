function notFoundHandler(app){
    app.use((req , res , next) => {
        res.status(404).json({
            message : ' Not Found Route'
        })
    })
}

module.exports = notFoundHandler
