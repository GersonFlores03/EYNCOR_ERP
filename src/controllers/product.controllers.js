const db = require("../database/models/index")
const servicesProduct = require("../services/product.service")
//const servicesProduct = require("../services/product.service")
const Product = db.Product
const ContentP = db.ContentP


const createProduct = async (req ,res) => {
     try {
      
        const {titulo , descripcion} = req.body
        let nuevaRutaImagen = '/image/' + req.file.filename

        const newProduct = await Product.create({
            titulo,
            descripcion,
            image:nuevaRutaImagen,
            user_id:req.user.id
    
        })
        res.status(201).json(newProduct)
        
     } catch (error) {
        res.status(400).json(error)
     }
}


const getProducts = async (req ,res) => {
    try {
        //necesitamos servicios para obtener el contenido
        const getProduct = await servicesProduct.findAll()
        res.status(200).json(getProduct)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getProductContent = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await servicesProduct.productContent(id);
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ error: "Producto no encontrado" });
        }
    } catch (error) {
        console.error("Error al obtener el contenido del producto:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

const getContentProduct = async (req ,res) => {
    try {
        const result = await Product.findAll({
            include: {
                model: ContentP,
                required: true
              }
        })

        res.json(result)

    } catch (error) {
        res.json(error)
    }
}



module.exports = {
    getProducts,
    createProduct,
    getProductContent,
    getContentProduct
}
