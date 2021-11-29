const Joi = require('joi')

module.exports = {
    register (req, res, next) {

        const schema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        })

        const validation = schema.validate(req.body)

        const error = validation.error

        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                        res.status(400).send({
                            error: 'You must provide a valid e-mail address!'
                        })
                        return
                    break;

                case 'password':
                        res.status(400).send({
                            error: `The password provided failed to math the fallowing rules: 
                            <br>
                            1. Must be contains ONLY the fallowing characters: lower case, upper case, numerics.
                            <br>
                            2. Must be at least 8 characters in length`
                        })    
                        return            
                    break;

                default:
                    res.status(400).send({
                        error: 'Invalid registration information'
                    })
                    return
            }
        }

        next()
    }
}