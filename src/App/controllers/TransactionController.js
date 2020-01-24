/**
 * TRANSACTION CONTROLLER FILE
 */

//  transaction schema
const { Transaction } = require('../models')

exports.TransactionController = {
    async store(req, res) {
        const transaction = await Transaction.create(req.body)
        await transaction.save().then(result => {
            return res.status(200).json({
                message: 'The transaction was created'
            })
        }).catch(err => {
            return res.status(500).json(error)
        })
    },

    async index(req, res) {
        await Transaction.find().exec().then(result => {
            console.log(result)
            return res.status(200).json(result)
        }).catch(err => {
            return res.status(500).json(err)
        })
    },

    async show(req, res) {
        await Transaction.findOne({ sender: req.query.name }).exec()
            .then(result => {
                return res.status(200).json(result)
            }).catch(err => {
                return res.status(500).json(err)
            })
    },

    async edit(req, res) {
        const transaction = await Transaction.findById(req.query.id).exec()

        transaction.set(req.body)

        await transaction.save().then(result => {
            return res.status(200).json({
                message: 'The transaction was updated'
            })
        }).catch(err => {
            return res.status(500).json(err)
        })
    },

    async remove(req, res) {
        const transaction = await Transaction.findById(req.query.id).exec()

        await transaction.deleteOne({ _id: req.query.id }).exec().then(result => {
            return res.status(200).json({
                message: 'The transaction was deleted'
            })
        }).catch(err => {
            return res.status(500).json(err)
        })
    }
}