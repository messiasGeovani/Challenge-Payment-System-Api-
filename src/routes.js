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
routes.post('/client', () => {
    console.log('A client was created')
})

//  transactions creation route
routes.post('/transaction', () => {
    console.log('A transaction was created')
})

//  clients recovery route
routes.get('/clients', () => {
    console.log('The clients was retrieved')
})

//  transactions recovery route
routes.get('/transactions', () => {
    console.log('The transactions was retrieved')
})

// exporting module
exports.Routes = routes