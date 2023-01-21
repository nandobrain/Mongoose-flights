const mongoose = require('mongoose')

const Schema = mongoose.Schema

const destinationSchema = new Schema( {
    airport: {
        type: String,
        required: true,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'PDX'],
    },

    arrival: {
        type: Date,
        // default: function() {
        //     return new Date().getFullYear();
        // }
    },
})

const flightsSchema = new Schema( {
    airline: {
        type: String,
        required: true,
        enum: ['American Airlines', 'Delta', 'United', 'Southwest', 'Alaska'],

    },

    airport: {
        type: String,
        required: true,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'PDX'],
        default: 'PDX'
    },

    flightNo: {
        type: Number,
        required: true,
        min: [10, " "],
        max: [9999, " "]
    },

    departureDate: {
        type: Date,
        default: function() {
            return new Date().getFullYear();
        }
    },

    destinations: [destinationSchema]
    

})

module.exports = mongoose.model("flights", flightsSchema)