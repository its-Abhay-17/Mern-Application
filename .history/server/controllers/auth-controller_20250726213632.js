const User = require("../models/user-model")
const bcrypt = reqire('bcryptjs')
const home = async (req,res) =>{
    try {
        res.send('Hello I am a home page by controllers simple')

    } catch (error) {
        console.error(error)
    }
};

const register = async (req,res) =>{
    try {
        const {username, email, phoneNumber, password} = req.body

        const userExist = await User.findOne({email:email})

        if (userExist) {
            return res.status(400).json({message: "Email alredy exist"})
        }

        //hash the password
        const saltRound=10
        const hash_password= await bcrypt.hash(password, saltRound)

        const usercreted = await User.create({username, email, phoneNumber, password:hash_password})

        res.send(usercreted,req.body)
    } catch (error) {
        console.log(error)
    }
};

module.exports = {home, register};