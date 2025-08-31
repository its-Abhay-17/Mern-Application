const jwt = require("jsonwebtoken")
const User = require("../models/user-model")

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization')

    if (!token) {
        return res
            .status(401)
            .json({ message: "Unauthorized HTTP, Token not provided" })
    }
    const jwtToken = token
    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY)

        const UserData = await User.findOne({email:isVerified.email})
        console.log(UserData)
    } catch (error) {
        res.status(404).json({message: "Here we have a error from token"})
    }
};

module.exports = authMiddleware