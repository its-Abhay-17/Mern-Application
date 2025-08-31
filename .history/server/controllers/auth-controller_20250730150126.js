const User = require("../models/user-model");
const bcrypt = require('bcryptjs');

const home = async (req, res) => {
    res.send('Hello I am a home page by controllers simple');
};

//------------HERE this is a registration logic---------------------
const register = async (req, res) => {
    try {
        const { username, email, phoneNumber, password } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const userCreated = await User.create({ username, email, phoneNumber, password });

        res.status(201).json({
            msg:"Registration successful",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });
    } catch (error) {
        // res.status(500).json({ message: "Something went wrong" });
        next(error)
    }
};

//------------HERE this is a Login logic---------------------

const login = async function (req, res) {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(400).json({ message: "Invailed Credentials " });
        }

        
        const user = await userExist.comparepassword(password)

        if (user) {
            res.status(200).json({
                message: "Login Succesful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            })
        } else{
            res.status(401).json({
                message:"Invalid email or password"
            })
        }
    } catch (error) {
        res.status(500).json({ message: "internal server error" })

    }
}

module.exports = { home, register,login };
