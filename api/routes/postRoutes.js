const { postear, mapear } = require("../controllers/postControllers.js")
const Router = require('express')
const router = Router()

router.post("/post", postear)
router.get("/mapear/:id", mapear)

module.exports = router