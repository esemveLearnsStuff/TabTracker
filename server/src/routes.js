const AuthenticationController = require('./controllers/AuthenticationController')
const SongsController = require('./controllers/SongsController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {

    app.get('/status', (req, res) => {
        res.send({
            message: 'ok'
        })
    })

    app.post(
        '/register', 
        AuthenticationControllerPolicy.register,
        AuthenticationController.register
    )

    app.post(
        '/login', 
        AuthenticationController.login
    )

    app.get(
        '/songs', 
        SongsController.index
    )

    app.post(
        '/song/create', 
        SongsController.post
    )

    app.get(
        '/song/:songId', 
        SongsController.show
    )

}
