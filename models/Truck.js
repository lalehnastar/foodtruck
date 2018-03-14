const
    mongoose = require('mongoose'),
    truckSchema = new mongoose.Schema({
        name: String,
        location: String,
        cuisine: String
    })

const Truck = mongoose.model('Truck', truckSchema)
module.exports = Truck