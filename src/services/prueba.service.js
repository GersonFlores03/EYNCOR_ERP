const models = require('../database/models/users')



class CreateService {
    static async create(data){
        try {
            const respuesta = await models.create(data)
            return respuesta
        } catch (error) {
            throw(error)
        }
    }
}


module.exports = CreateService