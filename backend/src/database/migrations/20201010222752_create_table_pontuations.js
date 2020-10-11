
exports.up = function(knex) {
    return knex.schema.createTable('pontuations', function(table){
      table.increments('id').primary();
        table.string('insignes').notNullable

      table.integer('students_id')
        .references('students.id')
        .notNullable()
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        
   })
  };
  
  exports.down = function(knex) {
  return knex.schema.dropTable('pontuations')
  };
  
  
