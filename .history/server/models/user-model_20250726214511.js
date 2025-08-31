const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    username:{
        type:String,
        require:true,
    },

    email:{
        type:String,
        require:true,
    }, 

    phoneNumber:{
        type:Number,
        require:true,
    },

    password:{
        type:String,
        require:true,
    },

    IsAdmin:{
        type:String,
        default:false
    }
})

userSchema.pre('save', async function(next) {
    console.log("pre method", this)

    
})

const User = new mongoose.model("User", userSchema)

module.exports = User

