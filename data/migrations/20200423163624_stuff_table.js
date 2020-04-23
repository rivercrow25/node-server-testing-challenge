
exports.up = function (knex) {
    return knex.schema.createTable('stuff', tbl => {
        tbl.increments('id')
        tbl.string('thing').notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('stuff')
};
