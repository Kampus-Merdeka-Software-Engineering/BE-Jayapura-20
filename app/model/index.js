const sequelize = require('sequelize')
const mysql = require('mysql2')

const connection = new sequelize.Sequelize(process.env.MYSQLDATABASE, process.env.MYSQLUSER, process.env.MYSQLPASSWORD, {
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    dialect: 'mysql',
    logging: false    
})

module.exports = connection
