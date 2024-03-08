const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')


//Rutas
const authLogin = require("./routes/auth.routes")
const routerProduct = require("./routes/product.routes")
const contentRouter = require("./routes/content.routes")
const blogRouter = require("./routes/blog.routes")
const contentBlogRouter = require("./routes/contentb.routes")
const tipoRouter = require("./routes/tipo.routes")



const app = express()

const PORT = +process.env.PORT || 8000




app.use(express.json());
app.use(cors());
app.use(morgan("dev"))
app.use(cookieParser())


// Routes de las peticiones

app.use(authLogin)
app.use(routerProduct)
app.use(contentRouter)
app.use(blogRouter)
app.use(contentBlogRouter)
app.use(tipoRouter)
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello Team Univlam')
})




app.listen(PORT, () => {
    console.log(`Welcome server EYNCOR ${PORT}`)
})