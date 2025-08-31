const mongoose = require("mongoose")

const url = ("mongodb://localhost:27017/mern_admin")

const connectdb =async ()=>{
    try {
    await mongoose.connect(url)
} catch (error) {
    console.error("database not be connected")
    process.exit(0)
}
}