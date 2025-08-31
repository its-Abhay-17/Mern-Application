const mongoose = require("mongoose");

const connectdb = async () => {
    try {
        const url = process.env.MONGO_URI; // Make sure this matches your .env
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Your Database has connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectdb;
