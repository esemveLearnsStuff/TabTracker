const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignuser(user) {
    const ONE_WEEK = 60*60*24*7;
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

function createResponseObject (user) {
    const userJson = user.toJSON()
    return {
        user: userJson,
        token: jwtSignuser(userJson)
    }
}


module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body)

            res.send(res.send(createResponseObject(user)))

        } catch (err) {
            res.status(400).send({
                error: 'This email account is already in use.'
            })
        }
    },

    async login (req, res) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({
              where: {
                email: email
              }  
            })

            if (!user) {
                res.status(403).send({
                    error: 'Unknown user/password!'
                })
                return
            }

            const isPasswordValid = await user.comparePassword(password)

            if (!isPasswordValid) {
                res.status(403).send({
                    error: 'Unknown user/password!'
                })
                return
            }
            
            res.send(createResponseObject(user))

        } catch (err) {
            console.log(err)
            res.status(400).send({
                error: 'Unknown user/password!'
            })
        } 
    }
}