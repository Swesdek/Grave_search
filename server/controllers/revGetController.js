const {Review} = require('../models/models')
const handlers = require('../telegramBot')

class revGetController {
    async getReview(req,res) {
        const reviews = await Review.findAll()
        res.send(reviews)
    }
}

module.exports = new revGetController()