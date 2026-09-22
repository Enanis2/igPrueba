const { registrarUsuario, logearUsuario, fetchMe, subirDocumento } = require("../controllers/usuarioControllers")
const { verifyJWT, multer } = require('../middlewares/userMiddlewares.js')
const Router = require('express')
const router = Router()

router.post("/registrar", registrarUsuario)
router.post("/logear", logearUsuario)
router.get("/me", verifyJWT, fetchMe)
router.post("/upload-document", multer, subirDocumento)

module.exports = router