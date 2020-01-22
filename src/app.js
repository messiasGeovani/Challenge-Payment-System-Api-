/**
 * App module
 */

//  express config
const Express = require('express')
// cors config
const cors = rqeuire('cors')
// routes config
const { Routes } = require('./routes')

const app = Express()

app.use(cors())
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
app.use(Routes)

// exporting module
exports.App = app