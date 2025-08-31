const mongoose = require('mongoose');
const URL = process.env.MONGODB_URL;

const connectDb = async () => {
    try {
        await mongoose.connect(URL)
        console.log("connects to", URL);
        console.log("Your MongoDb connected successfully")
    } catch (error) {
        console.log(error, "Your MongoDb can not be connected")
        process.exit(0) 
    }
}

module.exports = connectDb;