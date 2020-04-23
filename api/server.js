const express = require('express')

const server = express()

server.use(express.json())

const db = require('./model')

server.get('/', (req, res) => {
    db.get()
        .then(list => {
            res.status(200).end()
        })
        .then(err => {
            res.status(500).end()
        })
})

server.post('/', (req, res) => {
    db.insert(req.body)
        .then(() => {
            res.status(201).end()
        })
        .catch(() => {
            res.status(500).end()
        })
})

server.delete('/:id', (req, res) => {
    db.remove(req.params.id)
        .then(() => {
            res.status(200).end()
        })
})

module.exports = server