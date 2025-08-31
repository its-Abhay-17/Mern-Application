const mongoose = require("mongoose")

const URI = process.env.MONGODB_URI

const connectdb =async ()=>{
    try {
    await mongoose.connect(URI)
    console.log('Your Database has connected successfully');
} catch (error) {
    console.error("database not be connected")
    process.exit(0)
}
} 

module.exports = connectdb