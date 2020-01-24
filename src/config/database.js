/**
 * DATABASE CONFIGURATION FILE
 */
// mongoose module import
const mongoose = require('mongoose')

//  database connect
exports.databaseConfig = mongoose.connect(
    'mongodb+srv://dev:1234@cluster0-jvwp7.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)