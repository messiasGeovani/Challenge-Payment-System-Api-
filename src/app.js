/**
 * App module
 */

//  express config
const Express = require('express')

const app = Express()

app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))

exports.App = app