/**
 * TRANSACTION MODEL FILE
 */

//  mongoose schema config
const Schema = require('mongoose').Schema

exports.TransactionSchema = new Schema({
    sender: String,
    destination: String,
    value: Number
})