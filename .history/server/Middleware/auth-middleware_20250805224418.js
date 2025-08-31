const jwt = require("jsonwebtoken")

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization')

    if (!token) {
        return res
            .status(401)
            .json({ message: "Unauthorized HTTP, Token not provided" })
    }
    console.log('token from miidleware', token)
    next()
};

module.exports = authMiddleware