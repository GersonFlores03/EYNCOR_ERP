const CreateService = require("../services/prueba.service")



const CreateUser = async (req ,res ,next) => {
    try {
        const data = req.body
        const result = await CreateService.create(data)
        res.status(201).json(result)
        
    } catch (error) {
        res.status(400).json(error)
    }
    
} 



module.exports = {
    CreateUser
}