const mongoose = require('mongoose')

const rbSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    city: String,
    state: String,
    zip: String,
    wanted_collection: String
})

const RayBan = mongoose.model("RayBan", rbSchema)

module.exports = RayBan;