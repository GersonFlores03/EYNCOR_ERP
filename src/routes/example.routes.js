const {Router} = require("express")
const {CreateUser, findAllUser } = require("../controllers/prueba.controllers")


const router = Router()
router.get('/api/v1/users' , findAllUser)
router.post('/nosotros', CreateUser )


module.exports = router