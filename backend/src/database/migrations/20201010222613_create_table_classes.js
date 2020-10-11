
exports.up = function(knex) {
    return knex.schema.createTable('classes', function(table){
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('subject').notNullable();
      table.string('description').notNullable();

      table.integer('user_id')
        .references('users.id')
        .notNullable()
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        
   })
  };
  
  exports.down = function(knex) {
  return knex.schema.dropTable('classes')
  };
  



