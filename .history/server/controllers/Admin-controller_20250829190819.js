const User = require("../models/user-model")
const contact = require("../models/contact-model")

const GetAllusers =async(req,res,next)=>{
    try {
        const users = await User.find({},{password:0})
        console.log(users)
        if (!users|| users.length ===0) {
            return res.status(404).json({message:"No user found"})
        }
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}

const GetAllcontacts = async (req,res,next) => {
   try {
        const contacts = await contact.find()
        console.log(contacts)
        if (!contacts|| contacts.length ===0) {
            return res.status(404).json({message:"No contacts found"})
        }
        res.status(200).json(contacts)
    } catch (error) {
        next(error)
    }
}

const deleteUserById = async(req,res,next) =>{
    try {
        const id = req.params.id
        await User.deleteOne({_id: id})
    } catch (error) {
        next(error)
    }
}

module.exports = {GetAllusers,GetAllcontacts,deleteUserById};