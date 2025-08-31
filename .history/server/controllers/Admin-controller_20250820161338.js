const User = require("../models/user-model")

const GetAllusers =async(req,res,next)=>{
    try {
        const users = await User.find()
    } catch (error) {
        next(error)
    }
}