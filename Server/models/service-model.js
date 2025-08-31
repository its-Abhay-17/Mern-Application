const { Schema, mongoose, model } = require("mongoose")

const serviceSchema = new mongoose.Schema({
    service: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    provider: { type: String, required: true }
})

const service = new model("Service", serviceSchema)

module.exports = service