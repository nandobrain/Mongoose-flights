const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

module.exports = {
    new: newTicket,
    create
    

}

function newTicket(req, res) {
    res.render('tickets/new', {
        title: 'add ticket',
        tickets
    })
}



function create(req, res) {
    Ticket.findById(req.params.id, function(err, flight) {
        ticket.push(req.body.ticketsId)
        ticket.save(function(err) {
            res.redirect(`/flights/${flight._id}`)
        })
    })
}