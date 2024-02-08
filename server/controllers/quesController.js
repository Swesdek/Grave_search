const {Questionnaire} = require('../models/models')
const handlers = require('../telegramBot')

class quesController {
    async sendQues(req,res) {
        const mainData = req.body
        const ques = await Questionnaire.create(mainData)
        handlers.quesHandler(mainData)
        return res.json(ques)
    }
}

module.exports = new quesController()