const 
    express = require('express')
    trucksRouter = new express.Router(),
    trucksCtrl = require('.../controllers/trucks.js')

    trucksRouter.get('/api/trucks')

    module.exports = trucksRouter