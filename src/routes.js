/**
 * Routes file module
 */

//  express module
const Express = require('express')

// router config
const routes = Express.Router()

/**
 * Creaing the routes
 */

//  clients creation route
routes.post('/client', (req, res) => {
    return res.json({
        message: 'A client was created'
    })
})

//  transactions creation route
routes.post('/transaction', (req, res) => {
    return res.json({
        message: 'A transaction was created'
    })
})

//  clients recovery route
routes.get('/clients', (req, res) => {
    return res.json({
        message: 'A client was retrieved'
    })
})

//  transactions recovery route
routes.get('/transactions', (req, res) => {
    return res.json({
        sender: 'teste',
        destination: 'teste',
        valor: 12
    })
})

// exporting module
exports.Routes = routes