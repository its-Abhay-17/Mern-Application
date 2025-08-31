const mongoose = require("mongoose")

const url = process.env.MONGODB_URL

const connectdb =async ()=>{
    try {
    await mongoose.connect(url)
    console.log('Your Database has connected successfully');
} catch (error) {
    console.error("database not be connected")
    process.exit(0)
}
} 

module.exports = connectdb