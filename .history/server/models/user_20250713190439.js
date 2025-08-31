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

    IsAdmin:{
        require:true,
        type:Boolean
    }
})

const User = new mongoose.model("User", userSchema)

module.exports = User