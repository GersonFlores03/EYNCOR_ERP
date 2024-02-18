const {Router} = require("express")
const {CreateUser, findAllUser } = require("../controllers/prueba.controllers")


const router = Router()
router.get('/users' , findAllUser)
router.post('/nosotros', CreateUser )


module.exports = router