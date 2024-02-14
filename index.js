const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const userRouter = require("./src/routes/example.routes")
//Rutas
const app = express()

const PORT = +process.env.PORT || 8000




app.use(express.json());
app.use(morgan("dev"))
app.use(cors());


app.get('/users', (req, res) => {
    res.send('Hello Team Univlam')
})

// Routes de las peticiones

app.use(userRouter)

app.listen(PORT, () => {
    console.log(`Welcome server EYNCOR ${PORT}`)
})