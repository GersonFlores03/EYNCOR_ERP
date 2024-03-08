const {Router} = require("express")
const upload = require("../middlewares/multer")
const { createProduct, getProducts, getProductContent, getContentProduct } = require("../controllers/product.controllers")
const { authRequired } = require("../middlewares/validateToken")

const routerProduct = Router()
routerProduct.post("/api/product" , upload.single('image') , authRequired , createProduct )
routerProduct.get("/api/product"  , getProducts )
routerProduct.get("/api/product/:id/content" , getProductContent)
routerProduct.get("/api/product/content"  , getContentProduct )


module.exports = routerProduct
