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

        const userExist = User.find({email: email})

        console.log({data})
        res.send(req.body)
    } catch (error) {
        console.log(error)
    }
};

module.exports = {home, register};