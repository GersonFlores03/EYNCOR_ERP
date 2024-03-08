const db = require("../database/models/index")
const Tipo = db.Tipo
const Entrada = db.Entrada
const ContentE = db.ContentE


const tipoCreate = async (req ,res) => {
    try {
        const data = req.body
        const newTipo = await Tipo.create(data)
        res.status(201).json(newTipo)
    } catch (error) {
        res.status(400).json(error)
    }
}


const getTipo = async (req ,res) => {
    try {
        const resultTipo = await Tipo.findAll()
        res.status(200).json(resultTipo)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getCategoryContent = async (req ,res) => {
    try {
        const {id} = req.params
        const resultContent = await Tipo.findByPk(id , {
            include:[
                {
                  model:ContentE
                },
            ]
        })
        res.status(200).json(resultContent)
    } catch (error) {
        res.json(400).json(error)
    }
}

module.exports = {
     tipoCreate,
     getTipo,
     getCategoryContent
}