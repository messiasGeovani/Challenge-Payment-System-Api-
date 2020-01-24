const model = require('mongoose').model

module.exports = {
    Client: model('client', require('./Client').ClientSchema),
    Transaction: model('transaction', require('./Transactions').TransactionSchema)
}
