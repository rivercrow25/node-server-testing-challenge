const db = require('../data/db-config')

module.exports = {
    insert,
    remove,
    get
}

function get() {
    return db('stuff')
}

function insert(body) {
    return db('stuff')
        .insert(body, 'id')
}

function remove(id) {
    return db('stuff')
        .where({ id })
        .del()
}