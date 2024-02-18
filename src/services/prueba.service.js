const db = require('../database/models/index')



class CreateService {

    static async findUser(){
        try {
            const result = await db.Users.findAll()
            return result
        } catch (error) {
            throw error
        }
    }

    static async create(data){
        try {
            const respuesta = await db.Users.create(data)
            return respuesta
        } catch (error) {
            throw(error)
        }
    }
}


module.exports = CreateService