/**
 * Server configuration module
 */

//  app module
const { App } = require('./app')
// server port
const port = 8080

// running the server
App.listen(port, () => console.log(`server running at ${port}`))
