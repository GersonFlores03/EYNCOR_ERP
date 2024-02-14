const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
//Rutas
const app = express()

const PORT = +process.env.PORT || 8020

if(process.env.NODE_ENV === 'development'){
     app.use(morgan("dev"))
}

app.use(express.json());
app.use(cors());


app.get('/' , (req , res) => {
    res.send('Hello Server')
})

// Routes de las peticiones

app.listen(PORT , () => {
    console.log(`Welcome server EYNCOR ${PORT}`)
})