require('dotenv').config()

const express = require('express')
const sequelize = require('./db')
const cors = require('cors')
const router = require('./routes/index')
const models = require('./models/models')

const PORT = process.env.PORT || 8080
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', router)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()

        app.listen(PORT)

    } catch(e) {
        console.log(e)
    }
}

start()
