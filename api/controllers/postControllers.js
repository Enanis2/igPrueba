const { Posteos } = require('../models/index')

const postear = async (req, res) => {
    try {
        const { titulo, content, usuario } = req.body
        const post = await Posteos.create({
            titulo,
            content,
            UsuarioId: usuario.id
        })
        res.status(200).json({Message: "Posteado!", post})
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}

const mapear = async (req, res) => {
    try {    
        const { id } = req.params
        const posts = await Posteos.findAll({
            where: {
                UsuarioId: id
            },
            attributes: { exclude: ["id", "UsuarioId"] },
            order: [['id', 'DESC']]
        })
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}

module.exports = {
    postear,
    mapear
}