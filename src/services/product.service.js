const db = require("../database/models/index")
const Product = db.Product
const ContentP = db.ContentP

class servicesProduct {
   static async findAll() {
        try {
         const resultProduct = await Product.findAll()
         return resultProduct
        } catch (error) {
           throw(error)
        }
    }

    static async productContent(id){
      try {
         const result = await Product.findByPk( id ,{
              include:[
                {
                  model:ContentP,
                }
              ]
         })
         return result
      } catch (error) {
         throw error
      }
    }
}



module.exports = servicesProduct