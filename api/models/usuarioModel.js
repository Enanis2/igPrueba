const { sequelize } = require('../config/bd.js')
const { DataTypes } = require('sequelize')

const Usuarios = sequelize.define(
    'Usuarios',
    {
        id: {
            type: DataTypes.TINYINT.UNSIGNED,
            primaryKey: true,
            autoIncrement:true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true
            }
        },
        userName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        mail: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isBanned: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        documentUrl: DataTypes.STRING,
        verificationStatus: {
            type: DataTypes.STRING
        }
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'usuarios'
    }
)

module.exports = { Usuarios }