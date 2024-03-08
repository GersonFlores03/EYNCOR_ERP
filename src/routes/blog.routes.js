const {Router} = require("express")
const { createContentBlog, getContentBlog, getBlogContent } = require("../controllers/blog.controllers")
const { authRequired } = require("../middlewares/validateToken")

const blogRouter = Router()

blogRouter.post('/api/blog' , authRequired , createContentBlog)
blogRouter.get('/api/blog', getContentBlog )
blogRouter.get('/api/blog/:id/content' ,  getBlogContent )


module.exports = blogRouter