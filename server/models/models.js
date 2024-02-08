const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Questionnaire = sequelize.define('questionnaire', {
    id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement: true, unique: true},
    qServiceType : {type : DataTypes.TEXT},
    qName : {type : DataTypes.TEXT},
    qNumber : {type : DataTypes.TEXT},
    qDesc : {type : DataTypes.TEXT}
}) 

const Review = sequelize.define('review', {
    id : {type : DataTypes.BIGINT, primaryKey : true, unique: true},
    rUserName : {type : DataTypes.TEXT},
    rEmail : {type : DataTypes.TEXT},
    rDesc : {type : DataTypes.TEXT}
})

module.exports = {
    Questionnaire,
    Review
}
