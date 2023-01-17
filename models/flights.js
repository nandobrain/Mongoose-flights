const mongoose = require('mongoose')

const Schema = mongoose.Schema

const flightsSchema = new Schema( {
    airline: {
        type: String,
        enum: ['American Airlines', 'Delta', 'United', 'Southwest', 'Alaska'],

    }

    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'PDX'],
        default: 'PDX',
    }

    flightNo: {
        type: Number,
        required:  [10 - 9999],
    }

    departureDate: {
        type: Number,
        default: function() {
            return new Date().getFullYear();
        }
    }

})

module.exports = mongoose.model("flights", flightsSchema)