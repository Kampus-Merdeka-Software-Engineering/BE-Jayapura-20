const connection = require('./index')
const sequelize = require('sequelize')

const droppoint = connection.define("droppoint", {
    id: {type: sequelize.DataTypes.INTEGER, primaryKey: true},
    daerah: {type: sequelize.DataTypes.STRING},
    alamat: {type: sequelize.DataTypes.TEXT},
    tipe: {type: sequelize.DataTypes.ENUM('utama','cabang')},
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = droppoint