const db = require("../database/models/index")
const ContentP = db.ContentP



const createContent = async (req ,res) => {
    try {
        const data = req.body
        const result = await ContentP.create(data)
        res.status(201).json(result)
        
    } catch (error) {
        res.status(400).json(error)
    }
}


const getContent = async (req ,res) => {
    try {
        const result = await ContentP.findAll()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports = {
    getContent,
    createContent
}
