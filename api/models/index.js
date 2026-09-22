const { Usuarios } = require('./usuarioModel')
const { Posteos } = require('./postModel.js')

Usuarios.hasMany(Posteos)
Posteos.belongsTo(Usuarios)

module.exports = { Usuarios, Posteos }