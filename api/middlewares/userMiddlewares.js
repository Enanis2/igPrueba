const SECRET_KEY = "Sapapapa"
const jwt = require('jsonwebtoken')

const verifyJWT = async (req, res, next) => {
    try {
        const token = req.headers.autorizacion.split(' ')[1]
        if (!token) return res.status(404).json({message: 'Token no proporcionado'})
        usuarioDecoded = jwt.verify(token, SECRET_KEY)
        req.user = usuarioDecoded
        next()
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {verifyJWT}