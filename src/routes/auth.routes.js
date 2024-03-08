const {Router} = require("express")
const { register, login, logout, profile } = require("../controllers/auth.controllers")
const {authRequired} = require("../middlewares/validateToken")

const router = Router()
router.post('/api/register' , register)
router.post('/api/login' , login)
router.post('/api/logout' , logout)
router.get('/api/profile' , authRequired, profile)


module.exports = router