const {Review} = require('../models/models')
const handlers = require('../telegramBot')

class quesController {
    async sendReview(req,res) {
        const mainData = req.body
        handlers.reviewHandler(mainData)
        return res.json()
    }
}

module.exports = new quesController()