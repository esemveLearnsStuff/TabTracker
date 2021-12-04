const {Song} = require('../models')

module.exports = {

    async index (req, res) {
        try {
            const songList = await Song.findAll({
                limit: 10
            })
            console.log(songList)
            res.send(songList)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error has occured'
            })
        }
    },

    async post (req, res) {
        try {
            const song = Song.create(req.body)
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured'
            })
        }
    },

    async show (req, res) {
        try {
            const song = await Song.findByPk(req.params.songId)
            res.send(song)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error has occured'
            })
        }
    }

}