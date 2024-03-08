const {Router} = require("express")
const { createContent, getContent } = require("../controllers/content.controller")
const upload = require("../middlewares/multer")

const contentRouter = Router()
contentRouter.post('/api/content' , upload.single("image"), createContent )
contentRouter.get('/api/content' , getContent )


module.exports = contentRouter