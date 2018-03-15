const 
    express = require('express')
    trucksRouter = new express.Router(),
    trucksCtrl = require('.../controllers/trucks.js')

    trucksRouter.route('/')
    .get(trucksCtrl.index)
    .post(trucksCtrl.create)


    trucksRouter.route('/:id')
    .get(trucksCtrl.show)
    .patch(trucksCtrl.update)
    .delete(trucksCtrl.destroy)


    module.exports = trucksRouter