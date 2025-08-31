const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },

    email: {
        type: String,
        require: true,
    },

    phoneNumber: {
        type: Number,
        require: true,
    },

    password: {
        type: String,
        require: true,
    },

    IsAdmin: {
        type: String,
        default: false
    }
})

userSchema.pre('save', async function (next) {
    console.log("pre method", this)
    const user = this

    if (!user.isModified) {
        next()
    }

    try {
        const saltRound = await bcrypt.genSalt(10)
        const hash_password = await bcrypt.hash(user.password, saltRound)
        user.password = hash_password
    } catch (error) {
        next(error)
    }
})

const User = new mongoose.model("User", userSchema)

module.exports = User

