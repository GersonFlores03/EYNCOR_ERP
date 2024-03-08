const {Router} = require("express")
const { contentCreate , getContentb, getProductCategory } = require("../controllers/contentb.controllers")

const contentBlogRouter = Router()
contentBlogRouter.post('/api/contentb' , contentCreate)
contentBlogRouter.get('/api/contentb' , getContentb )
contentBlogRouter.get('/api/contentb/:id/product' , getProductCategory)


module.exports = contentBlogRouter