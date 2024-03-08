require("dotenv").config()
const jwt = require("jsonwebtoken");


const TOKEN_SECRET = process.env.TOKEN_SECRET

const authRequired = (req ,res , next) => {
   try {
    const { token } = req.cookies;

    if(!token) return res.status(401).json({message: "No token authorization"})

    jwt.verify(token , TOKEN_SECRET , (err , user) => {
        if(err) return res.status(403).json({message: "Invalid token"})
        req.user = { id: user.payload.id };
        next()
     })
   } catch (error) {
    return res.status(500).json({ message: error.message });
   }
}


module.exports = {
    authRequired
}
