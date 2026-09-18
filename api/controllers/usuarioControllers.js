const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { Usuarios } = require('../models/index.js')
const SALTOS = 10
const SECRET_KEY = "Sapapapa"

const registrarUsuario = async (req, res) => {
    try {
        const { nombre, userName, mail, password, img } = req.body
        if (!nombre || !userName || !mail || !password) {
            return res.status(422).json({ message: "Faltan datoides" })
        }

        hashedPassword = await bcrypt.hash(password, SALTOS)
        const usuarioRegistrado = await Usuarios.create({
            nombre,
            userName,
            mail,
            password: hashedPassword,
            img
        })

        res.status(200).json({ message: "USUARIO REGISTRADO", usuarioRegistrado })
    } catch (error) {
        res.status(500).json(error)
    }
}

const logearUsuario = async (req, res) => {
    try {
        const { mail, password } = req.body
        if (!mail || !password) return res.status(422).json({ message: "faltan datos" })

        const user = await Usuarios.findOne({ where: { mail: mail }, attributes: { exclude: password } })
        if (!user) return res.status(404).json({ message: "Usuario inexistente" })

        const coinciden = await bcrypt.compare(password, user.password)
        if (!coinciden) return res.status(400).json({ message: "La contraseña no coincide" })
        
        const token = jwt.sign({ userName: user.userName, mail }, SECRET_KEY, { expiresIn: '7d' })

        res.status(200).json({user, token})
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    registrarUsuario,
    logearUsuario
}