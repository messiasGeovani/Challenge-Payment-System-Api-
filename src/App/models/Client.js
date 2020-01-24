/**
 * CLIENT MODEL FILE
 */

//  mongoose schema config
const Schema = require('mongoose').Schema

exports.ClientSchema = new Schema({
    name: String,
    cpf: Number,
    password: String
})