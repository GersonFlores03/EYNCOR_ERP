const serviceBlog = require("../services/blog.service")
const db = require("../database/models/index")
const Entrada = db.Entrada
const ContentE = db.ContentE
const Tipo = db.Tipo


const createContentBlog = async (req ,res) => {
    try {
       const {titulo , autor} = req.body
       console.log(req.user.id)
       const newPost = await Entrada.create({
           titulo,
           autor,
           users_id:req.user.id
       })
       res.status(201).json(newPost)
    } catch (error) {
        res.status(400).json(error)
    }
}


const getContentBlog = async (req ,res) => {
    try {
        const result = serviceBlog.findAllBlog()
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}

//Blog con contenido petición get findByPk para obtener todos los contenidos
const getBlogContent = async (req ,res ) =>{
    try {
        const {id} = req.params
        const resultContent = await Entrada.findByPk(id , {
            include: [
                {
                    model:ContentE
                },
            ]
        })
        res.status(200).json(resultContent)
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports= {
    createContentBlog,
    getContentBlog, 
    getBlogContent
}