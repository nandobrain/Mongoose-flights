const Flights = require('../models/flights')

module.exports = {
    index,
    new: newFlight,
}

function index(req, res) {
    Flights.find({}, function(err, flights) {
        console.log(movies)
        res.render('flights/index', { flights })
    })
}

function newFlight(req, res) {
    res.render('flights/new')
}