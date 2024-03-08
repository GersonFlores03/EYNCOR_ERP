const db = require("../database/models/index")
const User = db.User;
const bycrypt = require("bcryptjs")
//const jwt = require("jsonwebtoken")
const createAccessToken = require("../libs/jwt")



const register = async (req, res, next) => {
    try {
        const { email, password, firstname } = req.body

        const passwordHash = await bycrypt.hash(password, 10)

        const register = new User({
            email,
            password: passwordHash,
            firstname
        })

        const userRegister = await register.save()
        const token = await createAccessToken({ id: userRegister.id })
        res.cookie('token', token)
        res.json({
            id: userRegister.id,
            email: userRegister.email,
            firstname: userRegister.firstname,
            createdAt: userRegister.createdAt,
            updatedAt: userRegister.updatedAt
        });


    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



const login = async (req, res, next) => {
    try {
        const { email, password } = req.body

        const userFound = await User.findOne({ email })
        if (!userFound) return res.status(400).json({ message: "User not found" })

        const isMatch = await bycrypt.compare(password, userFound.password)
        if (!isMatch) return res.status(400).json({ message: "Password not validate" })

        const token = await createAccessToken({ id: userFound.id })
        res.cookie('token', token)
        res.json({
            id: userFound.id,
            firstname: userFound.firstname,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        });


    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


const logout = (req, res, next) => {
    res.cookie('token', "", {
        expires: new Date(0),
    })
    res.sendStatus(200)
}

const profile = async (req, res, next) => {
    const userFound = await User.findByPk(req.user.id)
    console.log(req.user.id)

    if (!userFound) return res.status(404).json({ message: "User not found" })

    res.json({
        id: userFound.id,
        firstname: userFound.firstname,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt
    });
}



module.exports = {
    register,
    login,
    logout,
    profile
}