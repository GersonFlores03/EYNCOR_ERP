const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const userRouter = require("./routes/example.routes")
//Rutas
const app = express()

const PORT = +process.env.PORT || 8000




app.use(express.json());
app.use(cors());
app.use(morgan("dev"))


// Routes de las peticiones
app.use(userRouter)

app.get('/', (req, res) => {
    res.send('Hello Team Univlam')
})



app.listen(PORT, () => {
    console.log(`Welcome server EYNCOR ${PORT}`)
})