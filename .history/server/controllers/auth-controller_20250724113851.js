const bcrypt = require('bcrypt');
const User = require("../models/user");

const home = async (req, res) => {
    try {
        res.send("Hii this a controller")
    } catch (error) {
        console.log('You have a error');
    } 
}

const register = async (req, res) => {
    try {
        console.log(req.body);
        const { userName, email, phone, password } = req.body
        
        const userExist = await User.findOne({ email: req.body.email });
        if (userExist) {
            return res.status(400).json({ msg: "email already exists" });
        }
        //hash the password
        const saltRounds = 10;
        const hash_Password = await bcrypt.hash(password, saltRounds)
        const Usercreated = await User.create
            ({
                userName,
                email,
                phone,
                password: hash_Password
            })


        res.json({ msg:"Registration Complete successful", token: await Usercreated.generateToken(), userId:Usercreated._id.toString() })
    } catch (error) {
        res.status(404).send({ msg: "page not found" })
    }
}

module.exports = { home, register };