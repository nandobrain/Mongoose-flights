const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

module.exports = {
    new: newTicket,
    create,
    addTicket
    

}

function newTicket(req, res) {
    Ticket.find({})
    .sort('seat')
    .exec(function (err, tickets) {
    res.render('tickets/new', {
        title: 'add-ticket',
        tickets
    })
})
}



function addTicket(req, res) {
    Ticket.findById(req.params.id, function(err, flight) {
        ticket.push(req.body.ticketsId)
        ticket.save(function(err) {
            res.redirect(`/flights/${flight._id}`)
        })
    })
}

function create(req, res) {
    req.body.date += 'T00:00'
    Ticket.create(req.body, function(err, ticket) {
    res.redirect('/tickets/new')
    })
}