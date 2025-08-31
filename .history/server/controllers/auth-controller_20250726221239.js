const User = require("../models/user-model");

const home = async (req, res) => {
    res.send('Hello I am a home page by controllers simple');
};

const register = async (req, res) => {
    try {
        const { username, email, phoneNumber, password } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const userCreated = await User.create({ username, email, phoneNumber, password });

        res.status(201).json({
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

module.exports = { home, register };
