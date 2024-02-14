const {Router} = require("express")
const {getCurrentTime } = require("../controllers/prueba.controllers")


const router = Router()
router.get('/hora-actual', getCurrentTime )

module.exports = router