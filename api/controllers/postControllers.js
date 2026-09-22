const { Posteos } = require('../models/index')

const Postear = async (req, res) => {
    try {
        const { titulo, content, usuario } = req.body
        const post = Posteos.create({
            titulo,
            content,
            UsuarioId: usuario
        })
        res.status(200).json({Message: "Posteado!", post})
    } catch (error) {
        
    }
}