const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    username:{
        require:true,
        type:String
    },

    password:{
        require:true,
        type:String
    },
 
    email:{
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

userSchema.methods.genetrateToken = function() {
    try {
        return jwt.sign({
            userId:this._Id.toString(),
            email:this.email,
            isAdmin:this.IsAdmin
        },
        process.env.JWT_SECRECT_KEY
    )
    } catch (error) {
        console.error(error)
    }
}

const User = new mongoose.model("User", userSchema)
module.exports = User