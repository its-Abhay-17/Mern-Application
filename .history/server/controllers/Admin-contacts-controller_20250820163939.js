const Contact = require("../models/contact-model")

const GetAllusersContacts = async (req,res,next) => {
   try {
        const contacts = await User.find()
        console.log(contacts)
        if (!contacts|| contacts.length ===0) {
            return res.status(404).json({message:"No contacts found"})
        }
        res.status(200).json(contacts)
    } catch (error) {
        next(error)
    }
}

module.exports = GetAllusersContacts