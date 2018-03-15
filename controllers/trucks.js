const Truck = require ('../models/Truck.js')

module.exports = {
    index: (req, res) => {
        Truck.find({}, (err, allDemTrucks) => {
            res.render('trucks/index', { trucks: allDemTrucks })
        })
    },

    show: (req, res) => {
        Truck.findById(req.params.id, (err, thatTruck) => {
            res.render('trucks/show', { truck: thatTruck })
        })
    },

    new: (req, res) => {
        res.render('trucks/new')
    },

    create: (req, res) => {
        Truck.create(req.body, (err, brandNewTruck) => {
            res.redirect('/trucks')
        })
    },

    edit: (req, res) => {
        Truck.findById(req.params.id, (err, thatTruck) => {
            res.render('trucks/edit', { truck: thatTruck })
        })
    },

    update: (req, res) => {
        Truck.findByIdAndUpdate(req.params.id, req.body, (err, updatedTruck) => {
            res.redirect(`/trucks/${req.params.id}`)
        })
    },

    destroy: (req, res) => {
        Truck.findByIdAndRemove(req.params.id, (err) => {
            res.redirect('/trucks')
        })
    }
}