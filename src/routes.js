/**
 * Routes file module
 */

//  express module
const Express = require('express')

// router config
const routes = Express.Router()

// client controller import
const { ClientController } = require('./App/controllers/ClientController')

// transaction controller import
const { TransactionController } = require('./App/controllers/TransactionController')

/**
 * Creaing the routes
 */

//  clients creation route
routes.post('/client', ClientController.store)

//  clients index route
routes.get('/clients', ClientController.index)

//  clients show route
routes.get('/client', ClientController.show)

//  clients update route
routes.put('/client', ClientController.edit)

//  client delete route
routes.delete('/client', ClientController.remove)

//  transaction creation route
routes.post('/transaction', TransactionController.store)

//  transaction index route
routes.get('/transactions', TransactionController.index)

//  transaction show route
routes.get('/transaction', TransactionController.show)

//  transaction update route
routes.put('/transaction', TransactionController.edit)

//  transaction delete route
routes.delete('/transaction', TransactionController.remove)

// exporting module
exports.Routes = routes