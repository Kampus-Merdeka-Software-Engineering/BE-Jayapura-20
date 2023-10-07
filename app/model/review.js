const connection = require('./index')
const sequelize = require('sequelize')

const review = connection.define(
    "review", 
{
    id: {type: sequelize.DataTypes.INTEGER, primaryKey: true},
    nama: {type: sequelize.DataTypes.STRING},
    pesan: {type: sequelize.DataTypes.TEXT},
    image: {type: sequelize.DataTypes.STRING},
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = review