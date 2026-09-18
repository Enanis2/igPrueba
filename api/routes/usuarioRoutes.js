const { registrarUsuario, logearUsuario } = require("../controllers/usuarioControllers")
const Router = require('express')
const router = Router()

router.post("/registrar", registrarUsuario)
router.post("/logear", logearUsuario)

module.exports = router