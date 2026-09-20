const { registrarUsuario, logearUsuario, fetchMe } = require("../controllers/usuarioControllers")
const { verifyJWT } = require('../middlewares/userMiddlewares.js')
const Router = require('express')
const router = Router()

router.post("/registrar", registrarUsuario)
router.post("/logear", logearUsuario)
router.get("/me", verifyJWT, fetchMe)

module.exports = router