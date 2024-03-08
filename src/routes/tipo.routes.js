const {Router} = require("express")
const { tipoCreate, getTipo, getCategoryContent } = require("../controllers/tipo.controllers")

const tipoRouter = Router()

tipoRouter.post("/api/tipo" , tipoCreate )
tipoRouter.get("/api/tipo" , getTipo)
tipoRouter.get("/api/tipo/:id/content" , getCategoryContent)

module.exports = tipoRouter