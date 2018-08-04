const express = require('express')

module.exports = function(server) {
    //Define base URL for every routes
    const router = express.Router()
    server.use('/api', router)
    
    //Payment cycles routes
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}