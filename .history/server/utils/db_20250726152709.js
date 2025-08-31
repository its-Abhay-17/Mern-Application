const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI

const connectDb = async () => {
    try {
        await mongoose.connect(URI)
        console.log("Your MongoDb connected successfully")
    } catch (error) {
        console.log(error, "Your MongoDb can not be connected")
    }
}

module.exports = connectDb;