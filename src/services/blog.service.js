const db = require("../database/models/index")


class serviceBlog{
    static async findAllBlog(){
        try {
            const result = await db.Entrada.findAll()
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = serviceBlog