const db = require("../database/models/index")
const ContentE = db.ContentE
const Entrada = db.Entrada
const Tipo = db.Tipo



const contentCreate = async (req , res) => {
    try {
        const data = req.body
        const createContent = await ContentE.create(data)
        res.status(201).json(createContent)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getContentb = async (req , res) => {
    try {
        const getAllContent = await ContentE.findAll()
        res.status(200).json(getAllContent)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getProductCategory = async (req , res) => {
    try {
        const {id} = req.params
        const getTipoAll = await ContentE.findByPk(id , {
            include: [
                {
                   model:Entrada,
                }, 
                {
                  model: Tipo
                }
            ]
        })
        res.status(200).json(getTipoAll)
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports = {
    contentCreate,
    getContentb,
    getProductCategory
}