
exports.up = function(knex) {
    return knex.schema.createTable('produto', function (table){
        table.increments();
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.decimal('price').notNullable();
        table.string('main_ingredient').notNullable();

        table.string('barraqueira_id').notNullable;

        table.foreign('barraqueira_id').references('id').inTable('barraqueiras');   
    });
  
};

exports.down = function(knex) {
    knex.schema.dropTable('produto');
  
};
