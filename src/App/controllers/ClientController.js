/**
 * CLIENT CONTROLLER FILE
 */

//  client schema
const { Client } = require('../models')

exports.ClientController = {
    async store(req, res) {
        const client = await Client.create(req.body)
        await client.save().then(result => {
            return res.status(200).json({
                message: 'The client was created'
            })
        }).catch(err => {
            return res.status(500).json(error)
        })
    },

    async index(req, res) {
        await Client.find().exec().then(result => {
            console.log(result)
            return res.status(200).json(result)
        }).catch(err => {
            return res.status(500).json(err)
        })
    },

    async show(req, res) {
        await Client.findOne({ name: req.query.name }).exec()
        .then(result => {
            return res.status(200).json(result)
        }).catch(err => {
            return res.status(500).json(err)
        })
    },

    async edit(req, res) {
        const client = await Client.findById(req.query.id).exec()

        client.set(req.body)

        await client.save().then(result => {
            return res.status(200).json({
                message: 'The client was updated'
            })
        }).catch(err => {
            return res.status(500).json(err)
        })
    },

    async remove(req, res) {
        const client = await Client.findById(req.query.id).exec()

        await client.deleteOne({ _id: req.query.id }).exec().then(result => {
            return res.status(200).json({
                message: 'The client was deleted'
            })
        }).catch(err => {
            return res.status(500).json(err)
        })
    }
}