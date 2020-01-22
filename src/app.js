/**
 * App module
 */

//  express config
const Express = require('express')

const app = Express()

app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))

// exporting module
exports.App = app