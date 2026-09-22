const { sequelize } = require('../config/bd.js')
const { DataTypes } = require('sequelize')

const Posteos = sequelize.define(
    'Posteos',
    {
        id: {
            type: DataTypes.TINYINT.UNSIGNED,
            primaryKey: true,
            autoIncrement:true
        },
        titulo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subidoEl: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'posteos'
    }
)

module.exports = { Posteos }