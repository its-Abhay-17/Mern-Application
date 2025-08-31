const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        require:true,
        type:String
    },

    password:{
        require:true,
        type:String
    },

    EmailAddress:{
        require:true,
        type:String
    },

     PhoneNumber:{
        require:true,
        type:Number
    },

    IsAdmin:{
        type:Boolean,
        default:false
    }
})

const User = new mongoose.model("User", userSchema)

module.exports = User