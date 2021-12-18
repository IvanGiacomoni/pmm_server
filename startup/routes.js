const express = require('express')
const utility = require('../routes/utility')

module.exports = function(app) {
    app.use(express.json())
    
    
    app.use('/', utility)
}