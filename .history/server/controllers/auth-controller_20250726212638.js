const User = require("../models/user-model")
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

        const userExist = await User.find({email:email})

        if (userExist) {
            return res.status(404).json({message: "Email alredy exist"})
        }

        const usercreted = await User.create({username, email, phoneNumber, password})

        res.send(usercreted,req.body)
    } catch (error) {
        console.log(error)
    }
};

module.exports = {home, register};