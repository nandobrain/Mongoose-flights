const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

module.exports = {
    new: newTicket,
    create,
    addToFlight

}

function newTicket(req, res) {
    res.render('tickets/new', {
        title: 'add ticket',
        tickets
    })
}

function create(req, res) {
    Ticket.create(req.body, function(err, ticket) {
        res.redirect('/tickets/new')
    })
}

function addToFlight(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.push(req.body.ticketsId)
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`)
        })
    })
}