const TelegramApi = require('node-telegram-bot-api')
const {Review} = require('./models/models')

const TOKEN = ''
const bot = new TelegramApi(TOKEN, {polling : true})



async function reviewHandler(review) {
    const reviewState = {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "Утвердить", callback_data: `${review.id}`}, {text: "Отклонить", callback_data: "false"}]
            ]
        })
    }

    let message = 
    `   
    Вам пришел отзыв\n
    Имя пользователя: ${review.rUserName}\n
    Почта: ${review.rEmail}\n
    Комментарий: ${review.rDesc}\n
    `
     
    console.log(review) 

    bot.sendMessage("", message, reviewState)
    bot.sendMessage("", message, reviewState)
    bot.on('callback_query', async msg => {
        if (msg.data == review.id) {
            await Review.create(review)
        } else {
            return
        }
    })
}

function quesHandler(ques) { 
    console.log(ques)
    let message = 
    `   
Вам пришла заявка\n
Тип услуги: ${ques.qServiceType}\n
Имя пользователя: ${ques.qName}\n
Номер телефона или skype: ${ques.qNumber}\n
Комментарий: ${ques.qDesc}\n
    `
     
    bot.sendMessage("", message)
    bot.sendMessage("", message)
}
 







module.exports = {quesHandler, reviewHandler}
