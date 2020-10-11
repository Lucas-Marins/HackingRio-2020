exports.up = function(knex) {
    return knex.schema.createTable('classes', function(table){
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('subject').notNullable();
   })
  };
  
  exports.down = function(knex) {
  return knex.schema.dropTable('classes')
  };
