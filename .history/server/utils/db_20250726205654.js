const mongoose = require('mongoose'); 
const URL = process.env.MONGODB_URL;

const connectDb = async () => {
    try {
        await mongoose.connect(URL);
        console.log("Connected to", URL);
        console.log("Your MongoDB connected successfully");
    } catch (error) {
        console.log(error, "Your MongoDB cannot be connected");
        process.exit(1);
    }
};

module.exports = connectDb;
