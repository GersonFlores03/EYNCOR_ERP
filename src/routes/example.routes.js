const {Router} = require("express")
const {CreateUser } = require("../controllers/prueba.controllers")


const router = Router()
router.get('/nosotros', CreateUser )

module.exports = router