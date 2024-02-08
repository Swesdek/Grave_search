const Router = require('express')
const quesController = require('../controllers/quesController')
const reviewController = require('../controllers/reviewController')
const revGetController = require('../controllers/revGetController')
const router = new Router()

try {
    router.post('/ques', quesController.sendQues)
    router.post('/review', reviewController.sendReview) 
    router.get('/getReviews', revGetController.getReview)
} catch(e) {
    console.log(e)
}

module.exports = router

