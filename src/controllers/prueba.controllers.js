const CreateService = require("../services/prueba.service")




const findAllUser = async (req ,res , next) =>{
    try {
        const result = await CreateService.findUser()
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json(error)
    }
}

const CreateUser = async (req ,res ,next) => {
    try {
        const data = req.body
        const result = await CreateService.create(data)
        res.status(201).json(result)
        
    } catch (error) {
        res.status(404).json(error)
    }
    
} 



module.exports = {
    findAllUser,
    CreateUser
}